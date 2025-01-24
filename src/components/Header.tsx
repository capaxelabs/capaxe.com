'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from './ui/button';
import { siteConfig } from '@/config/site';

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
                className={`mx-4 mt-4 w-full max-w-5xl rounded-lg transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/50 backdrop-blur-sm'
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <nav className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold">
                            {siteConfig.name}
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Services
                            </Link>
                            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                                About
                            </Link>
                            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Portfolio
                            </Link>
                            <Button>Contact Us</Button>
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
                            <Link
                                href="/services"
                                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-gray-600 hover:text-gray-900 transition-colors px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Portfolio
                            </Link>
                            <Button className="w-full" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </nav>
            </motion.header>
        </div>
    );
}; 