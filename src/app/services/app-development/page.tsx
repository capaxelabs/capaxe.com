import React from 'react';
import { FiCode, FiTool, FiCloud } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { CTABottom } from '@/components/CTA';

const AppDevelopmentPage = () => {
    return (
        <>

            <div className="p-6 pt-32 bg-gray-50 min-h-screen flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Shopify App Development</h1>
                <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
                    Take your Shopify store to the next level with our expert app development services. Whether it&apos;s a
                    custom app tailored to your business needs or a public app designed to serve thousands of merchants,
                    we&apos;ve got you covered.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiCode className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom App Development</h2>
                        <p className="text-gray-600">
                            Build apps tailored to your specific requirements, integrating unique features that make your store stand out.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiTool className="text-4xl text-green-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Public App Development</h2>
                        <p className="text-gray-600">
                            Create scalable public apps that can be listed on the Shopify App Store to reach a global audience.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiCloud className="text-4xl text-purple-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Seamless Integrations</h2>
                        <p className="text-gray-600">
                            Integrate third-party tools and services seamlessly into your Shopify store for enhanced functionality.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Get a Free Consultation
                    </Button>
                    <Button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                        View Our Portfolio
                    </Button>
                </div>
            </div>

            <CTABottom />
        </>
    );
};

export default AppDevelopmentPage;
