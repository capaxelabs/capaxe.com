'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

import { siteConfig } from '@/config/site';
import { menuConfig } from '@/config/menu';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <motion.header
                className={`mx-4 mt-4 w-full max-w-5xl rounded-lg transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/50 '
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <nav className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-foreground">
                            {siteConfig.name}
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {menuConfig.mainNav.map((item) => (
                                item.isButton ? (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="bg-indigo-600 text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                )

                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600 hover:text-gray-900"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <motion.div
                        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col gap-4 pt-4 pb-2">
                            {menuConfig.mainNav.map((item) => (
                                item.isButton ? (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
                                    >
                                        <span>{item.title}</span>
                                    </a>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            ))}

                        </div>
                    </motion.div>
                </nav>
            </motion.header>
        </div>
    );
}; 