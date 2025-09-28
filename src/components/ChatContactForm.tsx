import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

interface FormData {
  name?: string;
  email?: string;
  companyName?: string;
  serviceType?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

// Helper functions to map chat responses to API format
const mapServiceType = (response: string) => {
  const lowerResponse = response.toLowerCase();
  if (lowerResponse.includes('store dev')) return 'store_development';
  if (lowerResponse.includes('app dev')) return 'app_development';
  if (lowerResponse.includes('store custom')) return 'store_customization';
  if (lowerResponse.includes('app custom')) return 'app_customization';
  if (lowerResponse.includes('maintenance')) return 'maintenance';
  return 'other';
};

const mapProjectType = (response: string) => {
  const lowerResponse = response.toLowerCase();
  if (lowerResponse.includes('new')) return 'new_project';
  if (lowerResponse.includes('existing')) return 'existing_project';
  return 'new_project';
};

const mapBudget = (response: string) => {
  const lowerResponse = response.toLowerCase();
  if (lowerResponse.includes('less than') || lowerResponse.includes('under')) return 'less_than_5k';
  if (lowerResponse.includes('5k') && lowerResponse.includes('10k')) return '5k_to_10k';
  if (lowerResponse.includes('10k') && lowerResponse.includes('25k')) return '10k_to_25k';
  if (lowerResponse.includes('more than') || lowerResponse.includes('above')) return 'more_than_25k';
  return 'less_than_5k';
};

const mapTimeline = (response: string) => {
  const lowerResponse = response.toLowerCase();
  if (lowerResponse.includes('immediate')) return 'immediate';
  if (lowerResponse.includes('1 month')) return 'within_1_month';
  if (lowerResponse.includes('3 month')) return 'within_3_months';
  if (lowerResponse.includes('flexible')) return 'flexible';
  return 'flexible';
};

const ChatContactForm = () => {
  const steps = [
    { key: "name", question: "Great! What's your email address?" },
    { key: "email", question: "Cool. What's your company name?" },
    { key: "companyName", question: "Which service are you looking for?\n• Store Development\n• App Development\n• Store Customization\n• App Customization\n• Maintenance\n• Other" },
    { key: "serviceType", question: "Is this for a new project or an existing one?\n• New Project\n• Existing Project" },
    { key: "projectType", question: "What's your budget range?\n• Less than $5k\n• $5k to $10k\n• $10k to $25k\n• More than $25k" },
    { key: "budget", question: "And your timeline?\n• Immediate\n• Within 1 month\n• Within 3 months\n• Flexible" },
    { key: "timeline", question: "Finally, tell me about your project in a few lines." },
    { key: "message", question: "✅ Thanks! Hit submit and we'll get back to you." }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hey! I'm here to learn about your project. What's your name?"
    }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (sender: "bot" | "user", text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      sender,
      text
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSend = async () => {
    const answer = input.trim();
    if (!answer) return;

    // Save answer
    const stepKey = steps[currentStep]?.key;
    if (stepKey) {
      setFormData(prev => ({ ...prev, [stepKey]: answer }));
    }

    addMessage("user", answer);
    setInput("");

    // Go to next step
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    if (steps[nextStep]) {
      setTimeout(() => {
        addMessage("bot", steps[nextStep].question);
      }, 500);
    } else {
      // Final step - submit form
      setIsSubmitting(true);
      setTimeout(async () => {
        try {
          const finalFormData = { ...formData, [stepKey]: answer };
          
          // Map chat form data to API format
          const apiData = {
            name: finalFormData.name || '',
            email: finalFormData.email || '',
            companyName: finalFormData.companyName || '',
            serviceType: mapServiceType(finalFormData.serviceType || ''),
            projectType: mapProjectType(finalFormData.projectType || ''),
            storeUrl: '', // Optional field, not collected in chat
            budget: mapBudget(finalFormData.budget || ''),
            timeline: mapTimeline(finalFormData.timeline || ''),
            message: finalFormData.message || ''
          };
          
          // Submit to your API endpoint
          const response = await fetch('/api/send-contact-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiData),
          });

          if (response.ok) {
            addMessage("bot", "🎉 Perfect! We've received your information and will be in touch within 24 hours. Thanks for choosing Capaxe Labs!");
            setIsComplete(true);
          } else {
            addMessage("bot", "❌ Oops! There was an issue submitting your form. Please try again or contact us directly.");
          }
        } catch (error) {
          console.error('Form submission error:', error);
          addMessage("bot", "❌ Oops! There was an issue submitting your form. Please try again or contact us directly.");
        } finally {
          setIsSubmitting(false);
        }
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({});
    setInput("");
    setIsComplete(false);
    setMessages([
      {
        id: 1,
        sender: "bot",
        text: "👋 Hey! I'm here to learn about your project. What's your name?"
      }
    ]);
  };

  return (
    <div className="bg-card p-6 rounded-2xl shadow-xl border border-border w-full max-w-lg mx-auto">
      {/* Chat Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🤖</span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Capaxe Assistant</h3>
          <div className="flex items-center gap-1">
            {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> */}
            {/* <span className="text-xs text-muted-foreground">Online</span> */}
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <div 
        ref={chatWindowRef}
        className="h-80 overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-muted"
      >
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`${
                message.sender === "bot"
                  ? "flex justify-start"
                  : "flex justify-end"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.sender === "bot"
                    ? "bg-gradient-to-r from-primary-100 to-primary-200 text-foreground"
                    : "bg-gradient-to-r from-primary-600 to-primary-700 text-white"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isSubmitting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gradient-to-r from-primary-100 to-primary-200 text-foreground px-4 py-2 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                <span>Processing your information...</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      {!isComplete ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-ring focus:border-ring outline-none transition-all duration-200 bg-background text-foreground"
            placeholder="Type your answer..."
            disabled={isSubmitting}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isSubmitting}
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
          >
            Send
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-accent to-primary text-white px-6 py-3 rounded-xl hover:from-accent/90 hover:to-primary/90 transition-all duration-200 font-medium"
          >
            Start New Conversation
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatContactForm;