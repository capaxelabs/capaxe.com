'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBagIcon, CodeBracketIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/config/site';
import LogoHero from '@/components/LogoHero';
import { StickyCards } from '@/components/StickyCard';
import { Header } from '@/components/Header';

export default function Home() {

  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-purple-800 to-blue-900 text-white">
        {/* Hero Section with Fixed Slider */}
        <Header />
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
      </div>
    </>
  );
}
