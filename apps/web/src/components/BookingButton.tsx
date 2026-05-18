import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Cal from "@calcom/embed-react";

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const BookingButton = ({ children, className, variant = "outline" }: BookingButtonProps) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [calTheme, setCalTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setCalTheme(isDark ? "dark" : "light");
  }, [isBookingModalOpen]);

  const handleBookCall = () => {
    setIsBookingModalOpen(true);
  };

  // Custom styling for the booking button with darker default and darker hover
  const bookingButtonStyle = "bg-primary-600 text-white border-primary-600 hover:bg-primary-700 hover:border-primary-700 transition-colors duration-200";

  return (
    <>
      <Button
        onClick={handleBookCall}
        variant={variant}
        className={`${bookingButtonStyle} ${className || ''}`}
      >
        {children}
      </Button>

      {/* Cal.com Booking Modal */}
      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-4xl w-full h-[85vh] p-0 gap-0 border-0 overflow-hidden bg-transparent shadow-none">
          <DialogTitle className="sr-only">Book a consultation</DialogTitle>
          <Cal
            calLink="capaxe/30min"
            config={{
              name: "Mukesh Yadav",
              email: "",
              notes: "Book a consultation call with Capaxe Labs",
              theme: calTheme,
            }}
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;