'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import Image from 'next/image';
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import { menuConfig } from '@/config/menu';


export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % siteConfig.hero.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Fixed Slider */}
      <div className="relative h-screen flex">
        {/* Fixed Left Slider */}
        <motion.div
          className="w-1/2 h-screen sticky top-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative w-full h-full">
            {siteConfig.hero.slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide}
                  alt={`${siteConfig.name} - Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            {/* Slide Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {siteConfig.hero.slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scrollable Right Content */}
        <div className="w-1/2 min-h-screen">
          <div className="p-16 sticky top-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-8xl font-bold mb-4">{siteConfig.name}</h1>
              <p className="text-xl text-gray-400 italic mb-8">{siteConfig.hero.subtitle}</p>
              <p className="text-2xl">
                {siteConfig.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Parallax Section */}
      <motion.section
        className="relative h-screen bg-purple-900 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center"
          style={{
            y: useTransform(useScroll().scrollY,
              [0, 1000],
              [0, 200]
            )
          }}
        >
          <h2 className="text-6xl font-bold mb-8">{siteConfig.services.title}</h2>
          <p className="text-xl max-w-2xl mx-auto">
            {siteConfig.services.description}
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-4">
            {siteConfig.services.items.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center text-purple-900 mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-lg"
            >
              <ShoppingBagIcon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shopify Store Development</h3>
              <p className="text-gray-600">Custom Shopify store development tailored to your business needs</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg"
            >
              <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Professional web development services with modern technologies</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-lg"
            >
              <PhoneIcon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support for your e-commerce needs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {menuConfig.footerNav.solutions.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-gray-300 transition-colors"
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Add other footer sections similarly */}
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p>© 2024 {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
