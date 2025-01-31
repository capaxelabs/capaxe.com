import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | Capaxe',
    description: 'Cookie Policy for Capaxe - Learn how we use cookies and similar technologies.',
};

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-40 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
                <div className="prose prose-lg">
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                        <p className="text-gray-700">
                            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
                        <p className="text-gray-700">We use cookies for the following purposes:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Essential cookies for website functionality</li>
                            <li>Analytics cookies to understand user behavior</li>
                            <li>Preference cookies to remember your settings</li>
                            <li>Marketing cookies for targeted advertising</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Essential Cookies</h3>
                                <p className="text-gray-700">Required for basic site functionality and security.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Performance Cookies</h3>
                                <p className="text-gray-700">Help us understand how visitors interact with our website.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Functionality Cookies</h3>
                                <p className="text-gray-700">Remember your preferences and settings.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Marketing Cookies</h3>
                                <p className="text-gray-700">Track your activity across websites for marketing purposes.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
                        <p className="text-gray-700">
                            You can control and manage cookies in various ways:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Browser settings to block or delete cookies</li>
                            <li>Our cookie consent tool on the website</li>
                            <li>Third-party opt-out tools</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                        <p className="text-gray-700">
                            We use some third-party services that may set their own cookies:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Google Analytics</li>
                            <li>Social Media Plugins</li>
                            <li>Payment Processors</li>
                            <li>Marketing Services</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Updates to This Policy</h2>
                        <p className="text-gray-700">
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
                        <p className="text-gray-700">
                            If you have questions about our Cookie Policy, please contact us at:
                            <br />
                            Email: privacy@capaxe.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
} 