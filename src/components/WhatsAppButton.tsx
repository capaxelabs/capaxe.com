'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/917019620967"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 p-3 bg-transparent rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={75}
                height={75}
                className="w-15 h-15"
            />
        </motion.a>
    );
} 