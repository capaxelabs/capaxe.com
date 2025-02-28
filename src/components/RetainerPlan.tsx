import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

interface Plan {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: string;
    features: string[];
    popular: boolean;
}

const plans: Plan[] = [
    {
        id: 1,
        name: "Essential",
        description: "Perfect for small businesses looking to maintain their Shopify store.",
        price: 499,
        duration: "monthly",
        features: [
            "10 hours of development work",
            "24/7 emergency support",
            "Monthly performance report",
            "Theme updates and maintenance",
            "Basic SEO optimization"
        ],
        popular: false
    },
    {
        id: 2,
        name: "Growth",
        description: "Ideal for growing businesses that need regular improvements and support.",
        price: 999,
        duration: "monthly",
        features: [
            "25 hours of development work",
            "24/7 emergency support",
            "Bi-weekly performance reports",
            "Conversion rate optimization",
            "Custom feature development",
            "Advanced SEO strategies",
            "Integration support"
        ],
        popular: true
    },
    {
        id: 3,
        name: "Enterprise",
        description: "For established businesses requiring comprehensive development and strategy.",
        price: 1999,
        duration: "monthly",
        features: [
            "50 hours of development work",
            "24/7 priority support",
            "Weekly strategy calls",
            "Dedicated project manager",
            "Custom app development",
            "Advanced analytics implementation",
            "Conversion rate optimization",
            "Competitor analysis",
            "A/B testing and optimization"
        ],
        popular: false
    }
];

const RetainerPlansSection = () => {
    const [selectedBillingCycle, setSelectedBillingCycle] = useState<"monthly" | "yearly">("monthly");

    const handlePurchase = (plan: Plan) => {
        toast({
            title: "Plan Selected",
            description: `You've selected the ${plan.name} plan. We'll contact you shortly to get started.`,
            duration: 5000,
        });
    };

    const getYearlyPrice = (monthlyPrice: number) => {
        return Math.floor(monthlyPrice * 10); // 20% discount for yearly billing
    };

    return (
        <>

            <section id="retainer-plans" className="section">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-200 text-primary-700 text-xs font-medium mb-4">
                            Retainer Plans
                        </span>
                        <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
                            {siteConfig.retainer.title}
                        </h2>
                        <p className="section-subtitle text-center mx-auto">
                            {siteConfig.retainer.description}
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="inline-flex rounded-full p-1 bg-gray-100">
                            <button
                                onClick={() => setSelectedBillingCycle("monthly")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedBillingCycle === "monthly"
                                    ? "bg-white shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setSelectedBillingCycle("yearly")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedBillingCycle === "yearly"
                                    ? "bg-white shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Yearly <span className="text-xs font-bold text-primary-500">Save 20%</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {siteConfig.retainer.items.map((item: any, index: number) => (
                            <Card
                                key={item.id}
                                className={`relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-elegant ${item.popular
                                    ? "border-primary-400 shadow-soft"
                                    : "border-gray-200 hover:border-primary-300"
                                    }`}
                            >
                                {item.popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-primary-400 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-[30%] translate-y-[40%] shadow-sm">
                                            POPULAR
                                        </div>
                                    </div>
                                )}
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                                    <div className="flex items-baseline mb-6">
                                        <span className="text-4xl font-bold">
                                            {selectedBillingCycle === "monthly" ? item.monthly : item.yearly}
                                        </span>
                                        <span className="text-gray-500 ml-2">
                                            per {selectedBillingCycle === "monthly" ? "month" : "year"}
                                        </span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {item.features.map((feature: any, index: number) => (
                                            <li key={index} className="flex items-start">
                                                <Check className="text-primary-400 h-5 w-5 mr-3 shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        onClick={() => handlePurchase(item)}
                                        className={`w-full ${item.popular
                                            ? "bg-primary-400 hover:bg-primary-500 text-white"
                                            : "border-2 border-primary-400 bg-transparent hover:bg-primary-100 text-primary-500"
                                            }`}
                                    >
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Select {item.name} Plan
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-primary-100 rounded-xl p-8 mt-16 text-center">
                        <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Need a Custom Plan?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            We understand that every business has unique needs. Contact us to discuss a custom
                            retainer plan tailored specifically to your Shopify store requirements.
                        </p>
                        <Button className="bg-primary-400 hover:bg-primary-500 text-white">
                            Contact Us for Custom Plans
                        </Button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default RetainerPlansSection;