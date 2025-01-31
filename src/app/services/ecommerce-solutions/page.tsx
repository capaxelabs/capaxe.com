import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'E-commerce Solutions | Capaxe Labs',
    description: 'Comprehensive e-commerce solutions to help your business succeed online. Custom development, integrations, and optimization services.',
};

export default function EcommerceSolutionsPage() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        E-commerce Solutions
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Complete e-commerce solutions to power your online business
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Platform Development */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Platform Development</h3>
                            <p className="mt-2 text-gray-500">
                                Custom e-commerce platforms built for your specific business needs.
                            </p>
                        </div>

                        {/* Integration Services */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Integration Services</h3>
                            <p className="mt-2 text-gray-500">
                                Seamless integration with payment gateways, shipping providers, and third-party services.
                            </p>
                        </div>

                        {/* Analytics & Optimization */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Analytics & Optimization</h3>
                            <p className="mt-2 text-gray-500">
                                Data-driven optimization to improve conversion rates and customer experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 