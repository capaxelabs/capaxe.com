import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
    title: `Web Development Services | ${siteConfig.name}`,
    description: 'Professional web development services using modern technologies. We build fast, responsive, and scalable websites tailored to your business needs.',
    openGraph: {
        title: `Web Development Services | ${siteConfig.name}`,
        description: 'Professional web development services using modern technologies. We build fast, responsive, and scalable websites tailored to your business needs.',
        type: 'website',
    },
};

export default function WebDevelopmentPage() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto pt-32 py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Web Development Services
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Modern web solutions built with cutting-edge technologies
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Frontend Development */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Frontend Development</h3>
                            <p className="mt-2 text-gray-500">
                                Responsive, modern, and user-friendly interfaces using React, Next.js, and more.
                            </p>
                        </div>

                        {/* Backend Development */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Backend Development</h3>
                            <p className="mt-2 text-gray-500">
                                Scalable and secure backend solutions with Node.js, Python, and other technologies.
                            </p>
                        </div>

                        {/* Full Stack Solutions */}
                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900">Full Stack Solutions</h3>
                            <p className="mt-2 text-gray-500">
                                End-to-end web applications with seamless integration and optimal performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 