import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { menuConfig } from '@/config/menu';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-purple-900 text-">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Company Info */}
                        <div>
                            <Link href="/" className="text-2xl font-bold text-white">
                                {siteConfig.name}
                            </Link>
                            <p className="mt-4 text-gray-200 max-w-xs">
                                {siteConfig.description}
                            </p>
                        </div>

                        {/* Solutions */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Solutions</h3>
                            <ul className="mt-4 space-y-4">
                                {menuConfig.footerNav.solutions.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-base text-gray-200 hover:text-gray-300"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
                            <ul className="mt-4 space-y-4">
                                {menuConfig.footerNav.company.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-base text-gray-200 hover:text-gray-300"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Support</h3>
                            <ul className="mt-4 space-y-4">
                                {menuConfig.footerNav.support.map((item) => (
                                    <li key={item.href}>
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base text-gray-200 hover:text-gray-300"
                                            >
                                                {item.title}
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="text-base text-gray-200 hover:text-gray-300"
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 border-t border-gray-200 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-base text-gray-400">
                                &copy; {currentYear} {siteConfig.name}. All rights reserved.
                            </p>
                            <div className="mt-4 md:mt-0">
                                <ul className="flex space-x-6">
                                    {menuConfig.footerNav.legal.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-sm text-gray-200 hover:text-gray-300"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}; 