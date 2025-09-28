import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Cal from "@calcom/embed-react";
import ChatContactForm from "@/components/ChatContactForm";

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
    const [selectedPlan, setSelectedPlan] = useState<RetainerPlanItem | null>(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const handleBookCall = (item: RetainerPlanItem) => {
        setSelectedPlan(item);
        setIsBookingModalOpen(true);
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


                    {/* Monthly plan description outside the cards */}
                    <div className="max-w-2xl mx-auto mb-12 text-center">
                        <p className="text-lg text-gray-600">
                            Ideal for companies with a budget, growing need for design support to address several problem statements at once.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {siteConfig.retainer.items.map((item: RetainerPlanItem) => (
                            <Card
                                key={item.id}
                                className={`relative overflow-hidden bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all flex flex-col ${item.popular
                                    ? "border-primary-400 ring-2 ring-primary-100"
                                    : "border-gray-200 hover:border-primary-300"
                                    }`}
                            >
                                {item.popular && (
                                    <div className="absolute top-0 right-0">
                                        <div className="bg-primary-400 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-[30%] translate-y-[40%] shadow-sm">
                                            Most popular
                                        </div>
                                    </div>
                                )}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-center flex-1">
                                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                        {/* Show description for Fixed plan, not Monthly plan since it's outside */}
                                        {item.id === 1 && (
                                            <p className="text-gray-600 text-sm mb-6">{item.description}</p>
                                        )}
                                        <div className="mb-6">
                                            <span className="text-2xl font-bold text-primary-600">
                                                {item.monthly}
                                            </span>
                                        </div>
                                        {item.features.length > 0 && (
                                            <ul className="space-y-2 mb-6 text-left flex-1">
                                                {item.features.map((feature: string, featureIndex: number) => (
                                                    <li key={`${item.id}-feature-${featureIndex}`} className="flex items-start">
                                                        <span className="text-primary-600 mr-2 text-sm">✓</span>
                                                        <span className="text-sm text-gray-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <Button
                                        onClick={() => handleBookCall(item)}
                                        className={`w-full mt-auto ${item.popular
                                            ? "bg-primary-400 hover:bg-primary-500 text-white"
                                            : "border-2 border-primary-400 bg-transparent hover:bg-primary-100 text-primary-500"
                                            }`}
                                    >
                                        Book a call
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
                            onClick={() => setIsContactModalOpen(true)}
                            className="bg-primary-400 hover:bg-primary-500 text-white"
                        >
                            💬 Contact Us for Custom Plans
                        </Button>
                    </div>
                </div>
            </section>

            {/* Cal.com Booking Modal */}
            <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
                <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-hidden">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            Book a Call - {selectedPlan?.title}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="h-[600px] overflow-auto">
                        {selectedPlan && (
                            <Cal
                                calLink="capaxe" // Replace with your actual Cal.com link
                                config={{
                                    name: "",
                                    email: "",
                                    notes: `Interested in ${selectedPlan.title} - ${selectedPlan.description}`,
                                    theme: "light"
                                }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    overflow: "scroll"
                                }}
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Chat Contact Modal for Custom Plans */}
            <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden p-0 w-auto">
                    <ChatContactForm />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default RetainerPlansSection;