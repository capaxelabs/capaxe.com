"use client";

import { motion } from 'motion/react';
import { MagnifyingGlassIcon, ChartBarIcon, DocumentTextIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { SubmitHandler } from 'react-hook-form';
import Turnstile from 'react-turnstile';



const formSchema = z.object({
    storeUrl: z.string()
        .url({ message: "Please enter a valid URL" })
        .refine((url) => url.includes('myshopify.com') || url.includes('.shop'), {
            message: "Please enter a valid Shopify store URL",
        }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    cfTurnstileResponse: z.string().min(1, 'Please complete the Turnstile challenge').optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const processSteps = [
    {
        icon: MagnifyingGlassIcon,
        step: 1,
        title: "Fill Out The Form",
        description: "Enter the web address of your Shopify store into the form provided."
    },
    {
        icon: ChartBarIcon,
        step: 2,
        title: "Turbo SEO Audit",
        description: "Our SEO tool will crawl your site, providing an overall SEO health score and top-level insights within minutes."
    },
    {
        icon: DocumentTextIcon,
        step: 3,
        title: "Receive a Customised Report",
        description: "Your custom SEO report will be emailed directly to your inbox, with a wait time of up to 10-15 minutes for established sites."
    },
    {
        icon: ArrowTrendingUpIcon,
        step: 4,
        title: "Improve Your SEO Score",
        description: "Optimise your online store with expert SEO guidance to grow organic traffic and tackle low-hanging fruit."
    }
];

const analysisAreas = [
    "On-page content",
    "Keyword rankings",
    "Crawlability",
    "Backlink profile"
];

const benefits = [
    "Identify SEO Issues & Opportunities",
    "Grow Site Rankings & Visibility"
];


export default function SEOAudit() {
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
            storeUrl: "",
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
                console.log('Turnstile verification failed');
                return;
            }

            const emailResponse = await fetch('/api/send-seo-audit-email', {
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
                    description: "Thank you! Your SEO audit report will be sent to your email shortly.",
                })
            } else {
                throw new Error('Failed to initiate SEO audit');
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
                        Shopify SEO Audit
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our powerful Shopify SEO audit tool provides actionable expert insights to improve your website visibility and traffic within weeks.
                    </motion.p>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="bg-white p-6 rounded-xl shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <step.icon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Step {step.step}: {step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">Get Your Free SEO Audit Report</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Store URL
                                </label>
                                <input
                                    {...register("storeUrl")}
                                    type="url"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    placeholder="https://your-store.myshopify.com"
                                />
                                {errors.storeUrl && (
                                    <p className="mt-1 text-sm text-red-600">{errors.storeUrl.message}</p>
                                )}
                            </div>

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
                                {isLoading ? 'Processing...' : 'Get Free SEO Audit'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Analysis Areas & Benefits */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">What We Analyze</h2>
                        <ul className="space-y-4">
                            {analysisAreas.map((area, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}