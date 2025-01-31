import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Capaxe',
    description: 'Privacy Policy for Capaxe - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-40 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-lg">
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700">
                            At Capaxe, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="text-gray-700">We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Name and contact information</li>
                            <li>Payment information</li>
                            <li>Communication preferences</li>
                            <li>Usage data and analytics</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Provide and maintain our services</li>
                            <li>Process your payments</li>
                            <li>Send you updates and marketing communications</li>
                            <li>Improve our services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
                        <p className="text-gray-700">
                            We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Security</h2>
                        <p className="text-gray-700">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                        <p className="text-gray-700">You have the right to:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Object to processing of your information</li>
                            <li>Data portability</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
                        <p className="text-gray-700">
                            If you have any questions about this Privacy Policy, please contact us at:
                            <br />
                            Email: privacy@capaxe.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
} 