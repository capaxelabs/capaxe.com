import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Plan } from "@/types";

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
    storeUrl: z.string().url({
        message: "Please enter a valid URL.",
    }).optional().or(z.literal('')),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

type FormSchemaType = z.infer<typeof formSchema>;

interface RetainerRequestFormProps {
    plan: Plan;
    onSuccess?: () => void;
}

export default function RetainerRequestForm({ plan, onSuccess }: RetainerRequestFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            storeUrl: "",
            message: `I'm interested in the ${plan.name} plan.`,
        },
    });

    const onSubmit = async (data: FormSchemaType) => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/send-retainer-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    planName: plan.name,
                    planPrice: plan.price,
                    planDuration: plan.duration,
                }),
            });

            if (response.ok) {
                reset();
                toast.success("Thank you for your interest! We'll get back to you shortly.");
                if (onSuccess) {
                    onSuccess();
                }
            } else {
                throw new Error("Failed to send request");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("There was an error submitting your request. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                </label>
                <input
                    {...register("companyName")}
                    id="companyName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your company name"
                />
                {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>}
            </div>

            <div>
                <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Store URL (optional)
                </label>
                <input
                    {...register("storeUrl")}
                    id="storeUrl"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="https://your-store.myshopify.com"
                />
                {errors.storeUrl && <p className="mt-1 text-sm text-red-600">{errors.storeUrl.message}</p>}
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your requirements"
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <div className="pt-2">
                <Button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Submit Request"}
                </Button>
            </div>
        </form>
    );
} 