import React from 'react';
import { FiCode, FiLayers, FiServer, FiBox } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { CTABottom } from '@/components/CTA';

const StoreDevelopmentPage = () => {
    return (
        <>
            <div className="p-6 pt-32 bg-gray-50 min-h-screen flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Custom Shopify Store Development</h1>
                <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
                    Build a powerful and engaging Shopify store tailored to your business needs.
                    Whether you prefer a traditional Liquid theme or a modern headless approach, we’ve got you covered.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiCode className="text-4xl text-blue-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Liquid Theme Development</h2>
                        <p className="text-gray-600">
                            Craft visually stunning Shopify stores using Liquid, Shopify's native templating language, for optimized performance and seamless integration.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiLayers className="text-4xl text-green-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Hydrogen + Oxygen Deployment</h2>
                        <p className="text-gray-600">
                            Build modern, fast, and personalized storefronts using Hydrogen and deploy them on Shopify’s Oxygen hosting platform for unmatched scalability.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiServer className="text-4xl text-purple-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Headless Storefront Development</h2>
                        <p className="text-gray-600">
                            Leverage frameworks like Next.js, React.js, and Remix to create fully headless Shopify stores, offering ultimate flexibility and speed.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition">
                        <FiBox className="text-4xl text-yellow-500 mb-4 mx-auto" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Custom Features & Integrations</h2>
                        <p className="text-gray-600">
                            Enhance your store with tailor-made features and seamless integrations to align with your unique business objectives.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mb-8">
                    From traditional Liquid themes to cutting-edge headless solutions, we provide end-to-end Shopify store development services.
                    Our expertise in Hydrogen and Oxygen ensures that your storefront is fast, scalable, and future-ready.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Get a Free Consultation
                    </Button>
                    <Button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                        Explore Our Portfolio
                    </Button>
                </div>

            </div>
            <CTABottom />
        </>
    );
};

export default StoreDevelopmentPage;