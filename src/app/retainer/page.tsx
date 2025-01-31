import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Shopify Retainer Plans | Capaxe Labs',
    description: 'Get dedicated Shopify support to scale your business with our flexible retainer plans. Custom development, maintenance, and optimization services available.',
};

export default function RetainerPage() {
    return (
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
                    {/* Growth Plan */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100 hover:border-purple-500 transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Plan</h3>
                        <div className="flex items-baseline text-gray-900">
                            <span className="text-5xl font-extrabold tracking-tight">₹50,000</span>
                            <span className="ml-1 text-2xl font-semibold">/month</span>
                            <span className="ml-2 text-gray-500">($600/month)</span>
                        </div>
                        <p className="mt-4 text-gray-500">
                            For Shopify store owners who need regular updates & enhancements.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>20 development hours/month</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Shopify store tweaks, bug fixes & performance optimization</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>UI/UX improvements for Shopify themes & Hydrogen stores</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Priority email support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Monthly report on implemented changes</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link href="/contact" className="block w-full bg-purple-600 text-white text-center py-3 px-4 rounded-md hover:bg-purple-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Scale Plan */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-100 hover:border-purple-500 transition-all">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale Plan</h3>
                        <div className="flex items-baseline text-gray-900">
                            <span className="text-5xl font-extrabold tracking-tight">₹1,00,000</span>
                            <span className="ml-1 text-2xl font-semibold">/month</span>
                            <span className="ml-2 text-gray-500">($1,200/month)</span>
                        </div>
                        <p className="mt-4 text-gray-500">
                            For businesses that require continuous custom development & API integrations.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>40 development hours/month</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Custom Shopify app development & integrations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Headless commerce & Hydrogen store improvements</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>API development, Shopify Flow automation & advanced features</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Slack/WhatsApp support + priority response</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-600 mr-2">✅</span>
                                <span>Bi-weekly strategy calls</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link href="/contact" className="block w-full bg-purple-600 text-white text-center py-3 px-4 rounded-md hover:bg-purple-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>

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
    );
} 