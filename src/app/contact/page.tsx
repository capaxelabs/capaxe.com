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
    companyName: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    serviceType: z.enum(['store_development', 'app_development', 'store_customization', 'app_customization', 'maintenance', 'other'], {
        required_error: "Please select a service type.",
    }),
    projectType: z.enum(['new_project', 'existing_project'], {
        required_error: "Please select a project type.",
    }),
    storeUrl: z.string().optional(),
    budget: z.enum(['less_than_5k', '5k_to_10k', '10k_to_25k', 'more_than_25k'], {
        required_error: "Please select your budget range.",
    }),
    timeline: z.enum(['immediate', 'within_1_month', 'within_3_months', 'flexible'], {
        required_error: "Please select your timeline.",
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
        reset,
        watch
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            serviceType: undefined,
            projectType: undefined,
            storeUrl: "",
            budget: undefined,
            timeline: undefined,
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        {...register("companyName")}
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Your company name"
                                    />
                                    {errors.companyName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Type
                                        </label>
                                        <select
                                            {...register("serviceType")}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="store_development">Shopify Store Development</option>
                                            <option value="app_development">Shopify App Development</option>
                                            <option value="store_customization">Store Customization</option>
                                            <option value="app_customization">App Customization</option>
                                            <option value="maintenance">Maintenance & Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.serviceType && (
                                            <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Type
                                        </label>
                                        <select
                                            {...register("projectType")}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        >
                                            <option value="">Select project type</option>
                                            <option value="new_project">New Project</option>
                                            <option value="existing_project">Existing Project</option>
                                        </select>
                                        {errors.projectType && (
                                            <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
                                        )}
                                    </div>
                                </div>

                                {watch('projectType') === 'existing_project' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Existing Store URL (optional)
                                        </label>
                                        <input
                                            {...register("storeUrl")}
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="https://your-store.myshopify.com"
                                        />
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Budget Range (USD)
                                        </label>
                                        <select
                                            {...register("budget")}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="less_than_5k">Less than $5,000</option>
                                            <option value="5k_to_10k">$5,000 - $10,000</option>
                                            <option value="10k_to_25k">$10,000 - $25,000</option>
                                            <option value="more_than_25k">More than $25,000</option>
                                        </select>
                                        {errors.budget && (
                                            <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Timeline
                                        </label>
                                        <select
                                            {...register("timeline")}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="immediate">Immediate Start</option>
                                            <option value="within_1_month">Within 1 Month</option>
                                            <option value="within_3_months">Within 3 Months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                        {errors.timeline && (
                                            <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Requirements & Details
                                    </label>
                                    <textarea
                                        {...register("message")}
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Please describe your project requirements, features needed, and any specific challenges you'd like us to address."
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

                            {/* Added Working Hours Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Working Hours</h2>
                                <div className="space-y-2">
                                    <p className="text-gray-600">
                                        <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM IST
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM IST
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Sunday:</span> Closed
                                    </p>
                                </div>
                            </div>

                            {/* Added FAQ Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Quick FAQs</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium text-lg mb-2">What's your typical response time?</h3>
                                        <p className="text-gray-600">We usually respond to all inquiries within 24 business hours.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-2">Do you work with international clients?</h3>
                                        <p className="text-gray-600">Yes, we work with clients globally and can accommodate different time zones.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-2">What happens after I submit the form?</h3>
                                        <p className="text-gray-600">Our team will review your requirements and schedule a discovery call to discuss your project in detail.</p>
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