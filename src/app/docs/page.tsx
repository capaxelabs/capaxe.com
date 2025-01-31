import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation | Capaxe Labs',
    description: 'Technical documentation, guides, and resources for Capaxe Labs services and solutions.',
};

export default function DocumentationPage() {
    const docCategories = [
        {
            title: 'Getting Started',
            items: [
                { title: 'Quick Start Guide', href: '/docs/quick-start' },
                { title: 'Installation', href: '/docs/installation' },
                { title: 'Basic Concepts', href: '/docs/concepts' },
            ],
        },
        {
            title: 'API Reference',
            items: [
                { title: 'Authentication', href: '/docs/api/auth' },
                { title: 'Endpoints', href: '/docs/api/endpoints' },
                { title: 'Error Handling', href: '/docs/api/errors' },
            ],
        },
        {
            title: 'Tutorials',
            items: [
                { title: 'Custom Theme Development', href: '/docs/tutorials/themes' },
                { title: 'App Integration', href: '/docs/tutorials/integration' },
                { title: 'Performance Optimization', href: '/docs/tutorials/optimization' },
            ],
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Documentation
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Comprehensive guides and documentation for our services
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {docCategories.map((category) => (
                            <div key={category.title} className="bg-purple-50 rounded-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {category.title}
                                </h2>
                                <ul className="space-y-3">
                                    {category.items.map((item) => (
                                        <li key={item.href}>
                                            <a
                                                href={item.href}
                                                className="text-purple-600 hover:text-purple-500"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 