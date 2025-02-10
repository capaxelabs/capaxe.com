import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Technical Support Services | ${siteConfig.name}`,
    description: 'Reliable technical support services for your e-commerce business. 24/7 maintenance, troubleshooting, and optimization to keep your store running smoothly.',
    openGraph: {
        title: `Technical Support Services | ${siteConfig.name}`,
        description: 'Reliable technical support services for your e-commerce business. 24/7 maintenance, troubleshooting, and optimization to keep your store running smoothly.',
        type: 'website',
    },
};

export default function TechnicalSupportPage() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-32 py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Technical Support Services
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        24/7 expert technical support for your digital presence
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* 24/7 Support */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
                            <p className="mt-2 text-gray-500">
                                Round-the-clock technical support for your critical business needs.
                            </p>
                        </div>

                        {/* Maintenance */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Maintenance Services</h3>
                            <p className="mt-2 text-gray-500">
                                Regular updates, security patches, and performance optimization.
                            </p>
                        </div>

                        {/* Troubleshooting */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Expert Troubleshooting</h3>
                            <p className="mt-2 text-gray-500">
                                Quick resolution of technical issues and expert problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 