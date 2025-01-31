import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Blog | Capaxe Labs',
    description: 'Latest insights, tutorials, and updates from the Capaxe Labs team on web development, e-commerce, and technology.',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="bg-white pt-40">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Blog
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Insights and updates from our team
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                        {posts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                                className="bg-purple-50 rounded-lg p-6 transition-transform hover:scale-105"
                            >
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {post.title}
                                    </h2>
                                    <p className="mt-3 text-gray-500">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center">
                                        <div className="text-sm text-gray-500">
                                            <p>{post.author}</p>
                                            <p className="mt-1">{post.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 