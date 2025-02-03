'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import LogoHero from '@/components/LogoHero';
import { StickyCards } from '@/components/StickyCard';

export default function Home() {

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-purple-800 to-blue-900 text-white">
        {/* Hero Section with Fixed Slider */}
        <LogoHero />

        {/* Parallax Section */}
        <motion.section
          className="relative h-screen bg-purple-900 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
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
            <h2 className="text-6xl font-bold mb-8">Explore Our Innovative Services</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Discover how our cutting-edge solutions can transform your business and drive success.
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
                <h3 className="text-xl text-foreground font-semibold mb-2">Custom Shopify Store Development</h3>
                <p className="text-foreground">Tailor-made Shopify solutions designed to elevate your brand and boost sales.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-linear-to-br from-blue-100 to-purple-100 shadow-lg"
              >
                <CodeBracketIcon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl text-foreground font-semibold mb-2">Professional Web Development</h3>
                <p className="text-foreground">Leverage the latest technologies to create stunning, high-performance websites.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-linear-to-br from-purple-100 to-blue-100 shadow-lg"
              >
                <PhoneIcon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl text-foreground font-semibold mb-2">24/7 Dedicated Support</h3>
                <p className="text-foreground">Experience peace of mind with our round-the-clock technical support services.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Retainer Benefits Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Shopify Retainer Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get dedicated Shopify support to scale your business. Choose the plan that fits your needs and let us handle your technical requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold mb-2">Growth Plan</h3>
                <p className="text-purple-300 text-lg mb-4">₹50,000/month ($600/month)</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    20 development hours/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Store tweaks & optimization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    UI/UX improvements
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-lg"
              >
                <h3 className="text-2xl font-bold mb-2">Scale Plan</h3>
                <p className="text-purple-300 text-lg mb-4">₹1,00,000/month ($1,200/month)</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    40 development hours/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Custom app development
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    API integrations & automation
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <a
                href="/retainer"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View All Plans
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
