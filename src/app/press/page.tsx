import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Press | Capaxe Labs',
    description: 'Latest news, press releases, and media coverage about Capaxe Labs.',
};

export default function PressPage() {
    // This is a placeholder. In a real implementation, you would fetch press releases from a CMS or database
    const pressReleases = [
        {
            title: 'Capaxe Labs Launches New E-commerce Platform',
            date: 'March 20, 2024',
            excerpt: 'Capaxe Labs announces the launch of its new e-commerce platform, designed to help businesses scale their online presence.',
            link: '#',
        },
        {
            title: 'Partnership Announcement with Leading Tech Company',
            date: 'March 15, 2024',
            excerpt: 'Capaxe Labs partners with industry leader to enhance e-commerce solutions for enterprise clients.',
            link: '#',
        },
        {
            title: 'Capaxe Labs Expands Global Presence',
            date: 'March 10, 2024',
            excerpt: 'Company announces expansion into new markets to better serve international clients.',
            link: '#',
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Press
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Latest news and updates from Capaxe Labs
                    </p>
                </div>

                <div className="mt-16">
                    <div className="space-y-8">
                        {pressReleases.map((release, index) => (
                            <div key={index} className="bg-purple-50 rounded-lg p-6">
                                <div className="flex flex-col space-y-3">
                                    <div className="text-sm text-gray-500">
                                        {release.date}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {release.title}
                                    </h2>
                                    <p className="text-gray-500">
                                        {release.excerpt}
                                    </p>
                                    <div>
                                        <a
                                            href={release.link}
                                            className="text-purple-600 hover:text-purple-500"
                                        >
                                            Read more →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 