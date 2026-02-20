import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Cal from "@calcom/embed-react";
import ChatContactForm from "@/components/ChatContactForm";

interface RetainerPlanItem {
    id: number;
    title: string;
    description: string;
    monthly: string;
    yearly: string;
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
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium mb-4 border border-primary-500/30">
                            Retainer Plans
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {siteConfig.retainer.title}
                        </h2>
                        <p className="text-muted-foreground">
                            Ideal for companies with a budget, growing need for design support to address several problem statements at once.
                        </p>
                    </div>

                    <div className="bento-grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
                        {siteConfig.retainer.items.map((item: RetainerPlanItem) => (
                            <div
                                key={item.id}
                                className={`relative overflow-hidden flex flex-col ${item.popular
                                    ? "bento-tile-accent"
                                    : "bento-tile"
                                    }`}
                            >
                                {item.popular && (
                                    <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                                        Most popular
                                    </span>
                                )}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-semibold mb-3 ${item.popular ? 'text-white' : 'text-foreground'}`}>{item.title}</h3>
                                        {item.id === 1 && (
                                            <p className={`text-sm mb-6 ${item.popular ? 'text-white/60' : 'text-muted-foreground'}`}>{item.description}</p>
                                        )}
                                        <div className="mb-6">
                                            <span className={`text-2xl font-bold ${item.popular ? 'text-white' : 'text-primary-400'}`}>
                                                {item.monthly}
                                            </span>
                                        </div>
                                        {item.features.length > 0 && (
                                            <ul className="space-y-2.5 mb-6">
                                                {item.features.map((feature: string, featureIndex: number) => (
                                                    <li key={`${item.id}-feature-${featureIndex}`} className="flex items-start">
                                                        <span className={`mr-2 text-sm flex-shrink-0 ${item.popular ? 'text-white/60' : 'text-primary-400'}`}>&#10003;</span>
                                                        <span className={`text-sm ${item.popular ? 'text-white/70' : 'text-muted-foreground'}`}>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <Button
                                        onClick={() => handleBookCall(item)}
                                        className={`w-full mt-auto rounded-xl ${item.popular
                                            ? "bg-white text-primary-600 hover:bg-gray-100"
                                            : "bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 border border-primary-500/30"
                                            }`}
                                    >
                                        Book a call
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bento-tile mt-4 text-center">
                        <h3 className="text-2xl font-semibold mb-3 text-foreground">Need a Custom Plan?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm">
                            We understand that every business has unique needs. Contact us to discuss a custom
                            retainer plan tailored specifically to your Shopify store requirements.
                        </p>
                        <Button
                            onClick={() => setIsContactModalOpen(true)}
                            className="bg-primary-500 hover:bg-primary-600 text-white rounded-xl"
                        >
                            Contact Us for Custom Plans
                        </Button>
                    </div>
                </div>
            </section>

            <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
                <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-hidden bg-surface-elevated border-border">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">
                            Book a Call - {selectedPlan?.title}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="h-[600px] overflow-auto">
                        {selectedPlan && (
                            <Cal
                                calLink="capaxe/30min"
                                config={{
                                    name: "",
                                    email: "",
                                    notes: `Interested in ${selectedPlan.title} - ${selectedPlan.description}`,
                                    theme: "dark"
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

            <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
                <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-hidden p-0 bg-transparent border-none shadow-none">
                    <ChatContactForm />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default RetainerPlansSection;
