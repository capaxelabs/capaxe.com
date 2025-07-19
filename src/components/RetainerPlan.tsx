import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import RetainerRequestForm from "@/components/RetainerRequestForm";
import type { Plan } from "@/types";

// Define the type for items in siteConfig.retainer.items
interface RetainerPlanItem {
    id: number;
    title: string;
    description: string;
    monthly: string;  // Price for monthly billing
    yearly: string;   // Price for yearly billing
    features: string[];
    popular: boolean;
}

const RetainerPlansSection = () => {
    const [selectedBillingCycle, setSelectedBillingCycle] = useState<"quarterly" | "yearly">("yearly");
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Calculate monthly price based on the selected billing cycle
    const getMonthlyPrice = (item: RetainerPlanItem, cycle: "quarterly" | "yearly"): string => {
        if (cycle === "quarterly") {
            // For quarterly, use monthly price with a 10% discount
            const monthlyPrice = Number.parseFloat(item.monthly.replace(/[^0-9.]/g, ''));
            const discountedPrice = monthlyPrice * 0.9;
            return `$${discountedPrice.toFixed(0)}`;
        }

        // For yearly, convert the yearly price to monthly equivalent (with 20% discount)
        const yearlyPrice = Number.parseFloat(item.yearly.replace(/[^0-9.]/g, ''));
        const monthlyEquivalent = yearlyPrice / 12;
        return `$${monthlyEquivalent.toFixed(0)}`;
    };

    // Calculate total price for the selected billing cycle (for the Plan object)
    const getTotalPrice = (item: RetainerPlanItem): number => {
        if (selectedBillingCycle === "quarterly") {
            const monthlyPrice = Number.parseFloat(item.monthly.replace(/[^0-9.]/g, ''));
            return monthlyPrice * 3 * 0.9; // 3 months with 10% discount
        }

        return Number.parseFloat(item.yearly.replace(/[^0-9.]/g, ''));
    };

    const handlePurchase = (item: RetainerPlanItem) => {
        // Convert the item from siteConfig to the Plan type
        const plan: Plan = {
            id: item.id,
            name: item.title,
            description: item.description,
            price: getTotalPrice(item),
            duration: selectedBillingCycle,
            features: item.features,
            popular: item.popular
        };

        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedPlan(null);
    };

    return (
        <>
            <section id="retainer-plans" className="section max-w-6xl mx-auto">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-200 text-primary-700 text-xs font-medium mb-4">
                            Retainer Plans
                        </span>
                        <h2 className="section-title text-center mx-auto">
                            {siteConfig.retainer.title}
                        </h2>
                        <p className="section-subtitle text-center mx-auto">
                            {siteConfig.retainer.description}
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="inline-flex rounded-full p-1 bg-gray-100">
                            <button
                                type="button"
                                onClick={() => setSelectedBillingCycle("quarterly")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedBillingCycle === "quarterly"
                                    ? "bg-white shadow-sm"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                Quarterly <span className="text-xs font-bold text-primary-500">Save 10%</span>
                            </button>
                            <button
                                type="button"
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
                        {siteConfig.retainer.items.map((item: RetainerPlanItem, index: number) => (
                            <Card
                                key={item.id}
                                className={`relative overflow-hidden bg-white rounded-2xl shadow-xl p-3 border-2 border-purple-100 hover:border-purple-500 transition-all ${item.popular
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
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold mb-3" >{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                                    <div className="flex flex-col mb-6">
                                        <div className="flex items-baseline">

                                            <span className="text-5xl font-bold">
                                                {getMonthlyPrice(item, selectedBillingCycle)}
                                            </span>
                                            <span className="text-gray-500 text-2xl font-semibold ml-2">
                                                /month
                                            </span>
                                        </div>
                                        {selectedBillingCycle === "quarterly" && (
                                            <div className="flex items-baseline line-through ">
                                                <span className="text-gray-400 text-xl font-semibold mr-2">
                                                    {item.monthly} /month
                                                </span>
                                            </div>
                                        )}
                                        {selectedBillingCycle === "yearly" && (
                                            <div className="flex items-baseline line-through ">
                                                <span className="text-gray-400 text-xl font-semibold mr-2">
                                                    {item.monthly} /month
                                                </span>
                                            </div>
                                        )}
                                        <p className="text-sm text-gray-500 mt-2">
                                            {selectedBillingCycle === "quarterly"
                                                ? "Billed quarterly (10% discount)"
                                                : "Billed annually (20% discount)"}
                                        </p>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {item.features.map((feature: string, featureIndex: number) => (
                                            <li key={`${item.id}-feature-${featureIndex}`} className="flex items-start">
                                                <span className="text-primary-600 mr-2">✅</span>
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
                                        {item.popular ? "Get Started" : "Learn More"}
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
                        <Button
                            onClick={() => {
                                // Create a custom plan object
                                const customPlan: Plan = {
                                    id: 999,
                                    name: "Custom Plan",
                                    description: "A custom plan tailored to your specific needs",
                                    price: 0,
                                    duration: "custom",
                                    features: [],
                                    popular: false
                                };
                                setSelectedPlan(customPlan);
                                setIsModalOpen(true);
                            }}
                            className="bg-primary-400 hover:bg-primary-500 text-white"
                        >
                            Contact Us for Custom Plans
                        </Button>
                    </div>
                </div>
            </section>

            {/* Retainer Request Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Request {selectedPlan?.name}</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to request the {selectedPlan?.name}. We'll get back to you shortly.
                        </DialogDescription>
                    </DialogHeader>
                    {selectedPlan && (
                        <RetainerRequestForm
                            plan={selectedPlan}
                            onSuccess={handleModalClose}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default RetainerPlansSection;