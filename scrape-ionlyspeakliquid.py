import requests
from bs4 import BeautifulSoup
import csv
import time
import json
import os
from urllib.parse import urljoin
from markdownify import markdownify as md

STATE_FILE = 'scraper_state.json'
CSV_FILE = 'newsletter_archive.csv'

def load_state():
    """Load the scraping state from file."""
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {
        'scraped_urls': [],
        'last_page': 0,
        'completed': False
    }

def save_state(state):
    """Save the scraping state to file."""
    with open(STATE_FILE, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=2)

def append_to_csv(article_data):
    """Append a single article to the CSV file."""
    file_exists = os.path.exists(CSV_FILE)
    
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as f:
        fieldnames = ['title', 'subtitle', 'date', 'author', 'url', 'content']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        
        if not file_exists:
            writer.writeheader()
        
        writer.writerow(article_data)

def scrape_archive_page(url):
    """Scrape a single archive page and return list of articles."""
    print(f"Scraping: {url}")
    
    try:
        response = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        articles = []
        
        # Find all article links in the archive
        # Looking for links that match the pattern /p/
        article_links = soup.find_all('a', href=lambda href: href and '/p/' in href)
        
        for link in article_links:
            href = link.get('href')
            if not href:
                continue
                
            # Convert relative URLs to absolute
            full_url = urljoin(url, href)
            
            # Avoid duplicates
            if any(a['url'] == full_url for a in articles):
                continue
            
            # Try to extract title from the link or nearby elements
            title = link.get_text(strip=True)
            
            # If title is empty, try to find it in parent elements
            if not title:
                parent = link.find_parent(['h1', 'h2', 'h3', 'h4'])
                if parent:
                    title = parent.get_text(strip=True)
            
            if title and full_url:
                articles.append({
                    'title': title,
                    'url': full_url
                })
        
        return articles
        
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return []

def scrape_article_content(url):
    """Scrape the content from an individual article page."""
    print(f"  Fetching content from: {url}")
    
    try:
        response = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract title (from h1 in the header)
        title = ""
        title_elem = soup.find('h1')
        if title_elem:
            title = title_elem.get_text(strip=True)
        
        # Extract subtitle/description (h2 in header)
        subtitle = ""
        subtitle_elem = soup.find('h2')
        if subtitle_elem:
            subtitle = subtitle_elem.get_text(strip=True)
        
        # Extract date
        date = ""
        time_elem = soup.find('time')
        if time_elem:
            date = time_elem.get('datetime', '')
        
        # Extract author
        author = ""
        # Look for author in byline or specific sections
        byline = soup.find(class_='bh__byline_wrapper')
        if byline:
            author_text = byline.get_text(strip=True)
            # Extract just the author name if possible
            if 'by' in author_text.lower():
                author = author_text.split('by')[-1].split('/')[0].strip()
        
        # Extract main content and convert to Markdown
        content = ""
        content_blocks = soup.find(id='content-blocks')
        content = md(str(content_blocks))
        
        # Clean up excessive newlines
        content = '\n'.join(line for line in content.split('\n') if line.strip() or not content.split('\n')[max(0, content.split('\n').index(line)-1):content.split('\n').index(line)].count(''))
        # Simplify: remove more than 2 consecutive newlines
        while '\n\n\n' in content:
            content = content.replace('\n\n\n', '\n\n')
        
        return {
            'title': title,
            'subtitle': subtitle,
            'date': date,
            'author': author,
            'url': url,
            'content': content.strip()
        }
        
    except Exception as e:
        print(f"  Error fetching article content: {e}")
        return None

def main():
    base_url = "https://ionlyspeakliquid.beehiiv.com/archive"
    num_pages = 8  # Total number of pages to scrape
    
    # Load previous state
    state = load_state()
    scraped_urls = set(state['scraped_urls'])
    start_page = state['last_page'] + 1
    
    if state['completed']:
        print("✅ Scraping already completed!")
        print(f"Total articles scraped: {len(scraped_urls)}")
        response = input("Do you want to start fresh? (yes/no): ")
        if response.lower() != 'yes':
            return
        else:
            # Reset state
            state = {'scraped_urls': [], 'last_page': 0, 'completed': False}
            scraped_urls = set()
            start_page = 1
            # Clear CSV file
            if os.path.exists(CSV_FILE):
                os.remove(CSV_FILE)
            save_state(state)
    
    if start_page > 1:
        print(f"📝 Resuming from page {start_page}")
        print(f"Already scraped {len(scraped_urls)} articles\n")
    
    # Collect all articles from archive pages
    all_articles = []
    
    print(f"Scraping pages {start_page} to {num_pages} from the archive...\n")
    
    # Scrape pages starting from where we left off
    for page_num in range(start_page, num_pages + 1):
        if page_num == 1:
            url = base_url
        else:
            url = f"{base_url}?page={page_num}"
        
        articles = scrape_archive_page(url)
        
        # Filter out already scraped articles
        new_articles = [a for a in articles if a['url'] not in scraped_urls]
        all_articles.extend(new_articles)
        
        # Update state after each page
        state['last_page'] = page_num
        save_state(state)
        
        print(f"  Found {len(new_articles)} new articles on page {page_num}")
        time.sleep(1)  # Be respectful with delays
    
    print(f"\nFound {len(all_articles)} new articles to scrape")
    
    # Remove duplicates based on URL
    unique_articles = []
    seen_urls = set()
    for article in all_articles:
        if article['url'] not in seen_urls and article['url'] not in scraped_urls:
            unique_articles.append(article)
            seen_urls.add(article['url'])
    
    print(f"After removing duplicates: {len(unique_articles)} unique new articles")
    
    # Now fetch full content for each article and save immediately
    successful_count = 0
    for i, article in enumerate(unique_articles, 1):
        print(f"\nProcessing article {i}/{len(unique_articles)}")
        
        # Skip if already scraped (double check)
        if article['url'] in scraped_urls:
            print(f"  ⏭️  Skipping (already scraped)")
            continue
        
        content_data = scrape_article_content(article['url'])
        
        if content_data:
            # Save to CSV immediately
            append_to_csv(content_data)
            
            # Update state
            scraped_urls.add(article['url'])
            state['scraped_urls'] = list(scraped_urls)
            save_state(state)
            
            successful_count += 1
            print(f"  ✅ Saved to CSV ({successful_count} total)")
        else:
            print(f"  ❌ Failed to scrape")
        
        # Be respectful with delays between requests
        time.sleep(2)
    
    # Mark as completed
    state['completed'] = True
    save_state(state)
    
    print(f"\n{'='*60}")
    print(f"✅ Scraping completed!")
    print(f"Total articles scraped this session: {successful_count}")
    print(f"Total articles in database: {len(scraped_urls)}")
    print(f"Output file: {CSV_FILE}")
    print(f"State file: {STATE_FILE}")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()

def convert_to_markdown(element, level=0):
    """Convert HTML elements to Markdown format."""
    markdown = []
    
    for child in element.children:
        if child.name is None:  # Text node
            text = child.strip()
            if text:
                markdown.append(text)
        elif child.name == 'h1':
            markdown.append(f"\n# {child.get_text(strip=True)}\n")
        elif child.name == 'h2':
            markdown.append(f"\n## {child.get_text(strip=True)}\n")
        elif child.name == 'h3':
            markdown.append(f"\n### {child.get_text(strip=True)}\n")
        elif child.name == 'h4':
            markdown.append(f"\n#### {child.get_text(strip=True)}\n")
        elif child.name == 'p':
            text = child.get_text(strip=True)
            if text:
                # Handle links within paragraphs
                links = child.find_all('a')
                p_html = str(child)
                for link in links:
                    link_text = link.get_text(strip=True)
                    link_url = link.get('href', '')
                    if link_url:
                        p_html = p_html.replace(str(link), f"[{link_text}]({link_url})")
                
                # Clean up and extract text
                temp_soup = BeautifulSoup(p_html, 'html.parser')
                text = temp_soup.get_text(strip=True)
                markdown.append(f"\n{text}\n")
        elif child.name in ['ul', 'ol']:
            for li in child.find_all('li', recursive=False):
                li_text = li.get_text(strip=True)
                if li_text:
                    markdown.append(f"- {li_text}")
            markdown.append("")
        elif child.name == 'a':
            link_text = child.get_text(strip=True)
            link_url = child.get('href', '')
            if link_text and link_url:
                markdown.append(f"[{link_text}]({link_url})")
        elif child.name == 'strong' or child.name == 'b':
            markdown.append(f"**{child.get_text(strip=True)}**")
        elif child.name == 'em' or child.name == 'i':
            markdown.append(f"*{child.get_text(strip=True)}*")
        elif child.name == 'code':
            markdown.append(f"`{child.get_text(strip=True)}`")
        elif child.name == 'blockquote':
            quote_text = child.get_text(strip=True)
            markdown.append(f"\n> {quote_text}\n")
        else:
            # Recursively process other elements
            if hasattr(child, 'children'):
                markdown.extend(convert_to_markdown(child, level + 1))
    
    return markdown

def scrape_article_content(url):
    """Scrape the content from an individual article page."""
    print(f"  Fetching content from: {url}")
    
    try:
        response = requests.get(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract title (from h1 in the header)
        title = ""
        title_elem = soup.find('h1')
        if title_elem:
            title = title_elem.get_text(strip=True)
        
        # Extract subtitle/description (h2 in header)
        subtitle = ""
        subtitle_elem = soup.find('h2')
        if subtitle_elem:
            subtitle = subtitle_elem.get_text(strip=True)
        
        # Extract date
        date = ""
        time_elem = soup.find('time')
        if time_elem:
            date = time_elem.get('datetime', '')
        
        # Extract author
        author = ""
        # Look for author in byline or specific sections
        byline = soup.find(class_='bh__byline_wrapper')
        if byline:
            author_text = byline.get_text(strip=True)
            # Extract just the author name if possible
            if 'by' in author_text.lower():
                author = author_text.split('by')[-1].split('/')[0].strip()
        
        # Extract main content and convert to Markdown
        content = ""
        content_blocks = soup.find(id='content-blocks')
        if content_blocks:
            markdown_parts = convert_to_markdown(content_blocks)
            content = '\n'.join(markdown_parts)
            # Clean up excessive newlines
            content = '\n'.join(line for line in content.split('\n') if line.strip() or not content.split('\n')[max(0, content.split('\n').index(line)-1):content.split('\n').index(line)].count(''))
            # Simplify: remove more than 2 consecutive newlines
            while '\n\n\n' in content:
                content = content.replace('\n\n\n', '\n\n')
        
        return {
            'title': title,
            'subtitle': subtitle,
            'date': date,
            'author': author,
            'url': url,
            'content': content.strip()
        }
        
    except Exception as e:
        print(f"  Error fetching article content: {e}")
        return None

def main():
    base_url = "https://ionlyspeakliquid.beehiiv.com/archive"
    num_pages = 8  # Total number of pages to scrape
    
    # Collect all articles from archive pages
    all_articles = []
    
    print(f"Scraping {num_pages} pages from the archive...\n")
    
    # Scrape first page (no page parameter)
    articles_page1 = scrape_archive_page(base_url)
    all_articles.extend(articles_page1)
    time.sleep(1)
    
    # Scrape remaining pages (2 through 8)
    for page_num in range(2, num_pages + 1):
        articles = scrape_archive_page(f"{base_url}?page={page_num}")
        all_articles.extend(articles)
        time.sleep(1)  # Be respectful with delays
    
    print(f"\nFound {len(all_articles)} articles across {num_pages} pages")
    
    # Remove duplicates based on URL
    unique_articles = []
    seen_urls = set()
    for article in all_articles:
        if article['url'] not in seen_urls:
            unique_articles.append(article)
            seen_urls.add(article['url'])
    
    print(f"After removing duplicates: {len(unique_articles)} unique articles")
    
    # Now fetch full content for each article
    enriched_articles = []
    for i, article in enumerate(unique_articles, 1):
        print(f"\nProcessing article {i}/{len(unique_articles)}")
        content_data = scrape_article_content(article['url'])
        if content_data:
            enriched_articles.append(content_data)
        
        # Be respectful with delays between requests
        time.sleep(2)
    
    # Save to CSV
    if enriched_articles:
        csv_filename = 'newsletter_archive.csv'
        with open(csv_filename, 'w', newline='', encoding='utf-8') as f:
            fieldnames = ['title', 'subtitle', 'date', 'author', 'url', 'content']
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            
            writer.writeheader()
            writer.writerows(enriched_articles)
        
        print(f"\n✅ Successfully saved {len(enriched_articles)} articles to {csv_filename}")
    else:
        print("\n❌ No articles were scraped")

if __name__ == "__main__":
    main()