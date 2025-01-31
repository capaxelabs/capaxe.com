import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ | Capaxe Labs',
    description: 'Frequently asked questions about our services, processes, and solutions.',
};

export default function FAQPage() {
    const faqs = [
        {
            question: 'What services does Capaxe Labs offer?',
            answer: 'We offer a comprehensive range of services including Shopify development, web development, e-commerce solutions, and technical support. Our services are tailored to help businesses establish and grow their online presence.',
        },
        {
            question: 'How long does it take to develop a custom Shopify store?',
            answer: 'The timeline for developing a custom Shopify store varies depending on the project requirements. A basic store can be set up in 2-4 weeks, while more complex projects with custom features may take 8-12 weeks.',
        },
        {
            question: 'Do you provide ongoing support after development?',
            answer: 'Yes, we offer comprehensive ongoing support through our dedicated support team. We provide various support packages to meet different needs, from basic maintenance to 24/7 priority support.',
        },
        {
            question: 'What is your development process?',
            answer: 'Our development process follows an agile methodology with clear phases: discovery, planning, design, development, testing, and deployment. We maintain regular communication and provide updates throughout the project.',
        },
        {
            question: 'Can you help migrate my existing store to Shopify?',
            answer: 'Yes, we specialize in store migrations to Shopify. We ensure a smooth transition of your products, customers, and order history while maintaining SEO rankings and minimizing downtime.',
        },
        {
            question: 'What are your payment terms?',
            answer: 'We typically work with a 50% upfront payment and the remaining 50% upon project completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods including bank transfer and major credit cards.',
        },
    ];

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Find answers to common questions about our services
                    </p>
                </div>

                <div className="mt-16">
                    <dl className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-purple-50 rounded-lg p-6">
                                <dt className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </dt>
                                <dd className="mt-2 text-gray-500">
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">
                        Can't find what you're looking for?{' '}
                        <a href="/contact" className="text-purple-600 hover:text-purple-500">
                            Contact us
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
} 