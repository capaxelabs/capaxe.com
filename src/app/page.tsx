'use client';
import { motion } from "motion/react";
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import { menuConfig } from '@/config/menu';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 py-16 text-center"
      >
        <motion.h1
          {...fadeInUp}
          className="text-5xl font-bold text-purple-900 mb-6"
        >
          Welcome to {siteConfig.name}
        </motion.h1>
        <motion.p
          {...fadeInUp}
          className="text-xl text-gray-600 mb-8"
        >
          {siteConfig.description}
        </motion.p>
      </motion.header>

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

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-purple-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-8">
              Capaxe Labs is a leading software service provider specializing in Shopify development.
              With years of experience and a passionate team of experts, we deliver exceptional
              e-commerce solutions that help businesses thrive in the digital marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
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
