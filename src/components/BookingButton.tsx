import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Cal from "@calcom/embed-react";

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

const BookingButton = ({ children, className, variant = "outline" }: BookingButtonProps) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
        <DialogContent className="sm:max-w-4xl max-h-[80vh] overflow-hidden">
          
            <Cal
              calLink="capaxe" // Replace with your actual Cal.com link
              config={{
                name: "",
                email: "",
                notes: "Book a consultation call with Capaxe Labs",
                theme: "light"
              }}
              style={{
                width: "100%",
                height: "100%",
                overflow: "scroll"
              }}
            />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingButton;