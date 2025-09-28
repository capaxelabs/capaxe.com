import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChatContactForm from "./ChatContactForm";

interface ChatContactModalProps {
  children: React.ReactNode;
  className?: string;
}

const ChatContactModal = ({ children, className }: ChatContactModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpenModal}
        className={className}
      >
        {children}
      </button>

      {/* Chat Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden p-0 w-auto">
          <ChatContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatContactModal;