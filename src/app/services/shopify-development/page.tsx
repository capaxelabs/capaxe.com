import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Shopify Development Services | ${siteConfig.name}`,
    description: 'Expert Shopify development services to build high-performing online stores. Custom themes, apps, and integrations to help your business grow.',
    openGraph: {
        title: `Shopify Development Services | ${siteConfig.name}`,
        description: 'Expert Shopify development services to build high-performing online stores. Custom themes, apps, and integrations to help your business grow.',
        type: 'website',
    },
};

export default function ShopifyDevelopmentPage() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-32 py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Shopify Development Services
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Custom Shopify solutions to help your business grow online
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Custom Theme Development */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Custom Theme Development</h3>
                            <p className="mt-2 text-gray-500">
                                Unique, responsive themes tailored to your brand and business needs.
                            </p>
                        </div>

                        {/* App Development */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">App Development</h3>
                            <p className="mt-2 text-gray-500">
                                Custom Shopify apps to extend your store's functionality.
                            </p>
                        </div>

                        {/* Store Optimization */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Store Optimization</h3>
                            <p className="mt-2 text-gray-500">
                                Performance optimization and conversion rate improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 