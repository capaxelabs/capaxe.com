import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Capaxe',
    description: 'Terms of Service for Capaxe - Understanding our terms and conditions.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <div className="prose prose-lg">
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-700">
                            By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
                        <p className="text-gray-700">
                            We provide web development, e-commerce solutions, and related services. We reserve the right to withdraw or amend our services without notice.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
                        <p className="text-gray-700">By purchasing our services, you agree to:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Provide accurate and complete payment information</li>
                            <li>Pay all charges at the prices in effect when incurred</li>
                            <li>Pay any applicable taxes</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p className="text-gray-700">
                            The service and its original content, features, and functionality are owned by Capaxe and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Responsibilities</h2>
                        <p className="text-gray-700">You are responsible for:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Maintaining the confidentiality of your account</li>
                            <li>All activities that occur under your account</li>
                            <li>Ensuring your use complies with applicable laws</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                        <p className="text-gray-700">
                            In no event shall Capaxe be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
                        <p className="text-gray-700">
                            We reserve the right to modify or replace these terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
                        <p className="text-gray-700">
                            If you have any questions about these Terms, please contact us at:
                            <br />
                            Email: legal@capaxe.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
} 