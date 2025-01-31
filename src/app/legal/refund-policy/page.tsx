import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund Policy | Capaxe',
    description: 'Refund Policy for Capaxe - Understanding our refund terms and conditions.',
};

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-40 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
                <div className="prose prose-lg">
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
                        <p className="text-gray-700">
                            We want you to be completely satisfied with our services. This refund policy outlines when and how you can request a refund for our services.
                        </p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility for Refunds</h2>
                        <p className="text-gray-700">You may be eligible for a refund in the following cases:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Service not provided as described</li>
                            <li>Technical issues preventing service delivery</li>
                            <li>Duplicate charges or billing errors</li>
                            <li>Cancellation before service commencement</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>
                        <p className="text-gray-700">To request a refund:</p>
                        <ol className="list-decimal pl-6 mt-4 text-gray-700">
                            <li>Contact our support team within 30 days of purchase</li>
                            <li>Provide your order number and reason for refund</li>
                            <li>Our team will review your request within 2-3 business days</li>
                            <li>If approved, refund will be processed to original payment method</li>
                        </ol>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Non-Refundable Items</h2>
                        <p className="text-gray-700">The following are not eligible for refunds:</p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Completed custom development work</li>
                            <li>Services already delivered and accepted</li>
                            <li>Third-party services or licenses</li>
                            <li>Services cancelled after work has begun</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Timeframes</h2>
                        <p className="text-gray-700">
                            Once approved, refunds typically process within:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-700">
                            <li>Credit/Debit Cards: 5-10 business days</li>
                            <li>Bank Transfers: 7-14 business days</li>
                            <li>Other payment methods: Varies by provider</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
                        <p className="text-gray-700">
                            If you have questions about our refund policy, please contact us at:
                            <br />
                            Email: support@capaxe.com
                            <br />
                            Phone: 1-800-CAPAXE
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
} 