import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Link from 'next/link';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    return {
        title: `${post.title} | Capaxe Labs Blog`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {

    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <div className="bg-white pt-40">
            <article className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <Link
                    href="/blog"
                    className="text-purple-600 hover:text-purple-500 mb-8 inline-block"
                >
                    ← Back to Blog
                </Link>

                <header className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
                        {post.title}
                    </h1>
                    <div className="text-gray-500">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <time>{post.date}</time>
                    </div>
                </header>

                <div
                    className="prose prose-purple max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
} 