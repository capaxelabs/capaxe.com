'use client';

import { motion } from 'motion/react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Turnstile from 'react-turnstile';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
    cfTurnstileResponse: z.string().min(1, 'Please complete the Turnstile challenge').optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ContactPage() {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/verify-turnstile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: data.cfTurnstileResponse }),
            });

            if (!response.ok) {
                throw new Error('Turnstile verification failed');
            }

            const emailResponse = await fetch('/api/send-contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (emailResponse.ok) {
                reset();
                toast({
                    title: "Success",
                    description: "Thank you for your message. We will get back to you soon!",
                })
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Error",
                description: "There was an error submitting the form. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Get in touch with us. We&apos;d love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Your message"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                    )}
                                </div>
                                <Turnstile
                                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                                    onVerify={(token) => setValue('cfTurnstileResponse', token)}
                                    execution='execute'
                                    language='en'
                                    theme='light'
                                    size='invisible'
                                    tabIndex={0}
                                />
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPinIcon className="w-6 h-6 text-purple-600 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Address</h3>
                                            <p className="text-gray-600">
                                                Koramangala, Bangalore<br />
                                                Karnataka, India
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <PhoneIcon className="w-6 h-6 text-purple-600 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Phone</h3>
                                            <a href="tel:+91 70196 20967" className="text-gray-600">+91 70196 20967</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <EnvelopeIcon className="w-6 h-6 text-purple-600 mt-1" />
                                        <div>
                                            <h3 className="font-medium">Email</h3>
                                            <a href="mailto:info@capaxe.com" className="text-gray-600">info [at] capaxe.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Image src="/whatsapp.svg" alt="Whatsapp" width={24} height={24} />
                                        <div>
                                            <h3 className="font-medium">Whatsapp</h3>
                                            <a href="wa.me/917019620967" className="text-gray-600">Chat with us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
} 