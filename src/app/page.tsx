'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import { menuConfig } from '@/config/menu';
import LogoHero from '@/components/LogoHero';
import { StickyCards } from '@/components/StickyCard';
import { Header } from '@/components/Header';

export default function Home() {





  return (
    <>

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section with Fixed Slider */}
        <Header />
        <LogoHero />

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

        {/* Sticky Cards */}
        <StickyCards />

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
                className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
              >
                <ShoppingBagIcon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Shopify Store Development</h3>
                <p className="text-gray-600">Custom Shopify store development tailored to your business needs</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 shadow-lg"
              >
                <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-600">Professional web development services with modern technologies</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
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
    </>
  );
}
