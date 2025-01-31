import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { CTABottom } from '@/components/CTA';

export const metadata: Metadata = {
    title: 'Shopify Retainer Plans | Capaxe Labs',
    description: 'Get dedicated Shopify support to scale your business with our flexible retainer plans. Custom development, maintenance, and optimization services available.',
};

export default function RetainerPage() {
    return (
        <>
            <div className="bg-white pt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Capaxe Shopify Retainer Plans 🚀
                        </h1>
                        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                            Get dedicated Shopify support to scale your business. Whether you need ongoing app maintenance,
                            custom development, or store optimization, we've got you covered.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        {siteConfig.retainer.items.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100 hover:border-purple-500 transition-all">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <div className="flex items-baseline text-gray-900">
                                    <span className="text-5xl font-extrabold tracking-tight">{item.monthly}</span>
                                    <span className="ml-1 text-2xl font-semibold">/month</span>
                                    <span className="ml-2 text-gray-500">({item.yearly}/Year)</span>
                                </div>
                                <p className="mt-4 text-gray-500">{item.description}</p>
                                <ul className="mt-6 space-y-4">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-purple-600 mr-2">✅</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="mt-16 text-center">
                            <p className="text-xl font-semibold text-gray-900">📌 Need more hours?</p>
                            <p className="mt-2 text-gray-500">
                                Custom retainers are available—
                                <Link href="/contact" className="text-purple-600 hover:text-purple-500">
                                    let's talk!
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <CTABottom />
            </div>
        </>
    );
}