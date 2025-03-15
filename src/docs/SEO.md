# SEO Implementation Guide

This document explains how to implement SEO for pages in our Astro site.

## Basic Usage

The site includes a comprehensive SEO system that allows for page-specific metadata and structured data.

### Passing SEO Object to Layout

The preferred way to set SEO metadata is to create an SEO object and pass it to the Layout component:

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout
  seo={{
    title: "My Page Title",
    description: "A detailed description of my page for search engines",
    keywords: "keyword1, keyword2, keyword3",
    contentType: "basic",
    pathname: "/my-page"
  }}
>
  <!-- Page content -->
</Layout>
```

### Backward Compatibility

For backward compatibility, you can still use individual properties (though the object approach is preferred):

```astro
<Layout
  title="My Page Title"
  description="A detailed description of my page"
>
  <!-- Page content -->
</Layout>
```

### Available SEO Properties

The following properties can be included in the SEO object:

- `title`: The page title (appears in browser tabs and search results)
- `description`: A detailed description of the page (used in search results)
- `image`: The social sharing image URL (relative to public folder)
- `keywords`: Comma-separated list of keywords
- `canonical`: Custom canonical URL (defaults to current URL)
- `type`: Content type ('website', 'article', or 'product')
- `publishedTime`: For articles, when it was published (ISO string)
- `modifiedTime`: For articles, when it was last updated (ISO string)
- `author`: For articles, the author name
- `noindex`: Set to true to prevent indexing by search engines
- `nofollow`: Set to true to prevent following links on the page
- `structuredData`: Object containing schema.org structured data

## Using SEO Utilities

For more consistent SEO across similar pages, use the utilities in `src/utils/seo.ts`:

### Basic Page SEO

```astro
---
import Layout from "@/layouts/Layout.astro";
import { createSEO } from "@/utils/seo";

const seo = createSEO({
  pageName: "About Us",
  description: "Learn more about our company and team"
});
---

<Layout seo={seo}>
  <!-- Page content -->
</Layout>
```

### Service Page SEO

For service pages, use the `createServiceSEO` utility which automatically adds schema.org structured data:

```astro
---
import Layout from "@/layouts/Layout.astro";
import { createServiceSEO } from "@/utils/seo";

const seo = createServiceSEO({
  pageName: "Web Development",
  description: "Professional web development services",
  keywords: "web development, website creation, responsive design"
});
---

<Layout seo={seo}>
  <!-- Page content -->
</Layout>
```

### Blog Post SEO

For blog posts, we've implemented a specialized approach. The `BlogPost.astro` layout automatically uses the `createBlogSEO` utility to generate proper article structured data:

```astro
---
// In a content collection template that uses BlogPost.astro layout
import BlogPost from "@/layouts/BlogPost.astro";
import { getCollection } from "astro:content";

// The BlogPost layout automatically creates SEO metadata
// from the blog post frontmatter
---

<BlogPost {...post.data}>
  <Content />
</BlogPost>
```

This automatically generates:

- Proper article type schema.org structured data
- Article publication and modification dates
- Open Graph article metadata

If you need to customize a specific blog post's SEO, you can access the `createBlogSEO` utility directly:

```astro
---
import Layout from "@/layouts/Layout.astro";
import { createSEO } from "@/utils/seo";

const seo = createSEO({
  pageName: "How to Optimize Your Website",
  description: "Learn the best practices for website optimization",
  publishDate: new Date("2023-04-15"),
  updateDate: new Date("2023-05-20"),
  authorName: "Jane Smith",
  contentType: "blog",
  pathname: "/blog"
});
---

<Layout seo={seo}>
  <!-- Blog post content -->
</Layout>
```

## Modifying the Generated SEO Object

You can modify the SEO object before passing it to the Layout component:

```astro
---
import Layout from "@/layouts/Layout.astro";
import { createServiceSEO } from "@/utils/seo";

// Create the base SEO object
const seo = createServiceSEO({
  pageName: "Mobile App Development",
  description: "Professional mobile app development services"
});

// Modify or override specific properties
seo.keywords = "mobile apps, iOS apps, Android apps";
seo.image = "/images/custom-image.jpg";

// Override the structured data if needed
seo.structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Mobile App Development",
  "description": seo.description,
  // ...additional structured data
};
---

<Layout seo={seo}>
  <!-- Page content -->
</Layout>
```

## Best Practices

1. Always provide a unique title and description for each page
2. Keep titles under 60 characters
3. Keep descriptions between 120-160 characters
4. Use relevant keywords naturally in titles and descriptions
5. Provide high-quality images for social sharing (1200×630 pixels recommended)
6. Use structured data when appropriate for your content type
7. Review your SEO implementation using tools like Google's Structured Data Testing Tool
