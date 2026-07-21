import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TeardownForm from "./TeardownForm";

interface AuditModalProps {
  children: React.ReactNode;
  className?: string;
}

const AuditModal = ({ children, className }: AuditModalProps) => {
  const [open, setOpen] = useState(false);
  // Bumping the key remounts the form so a reopened modal starts clean.
  const [formKey, setFormKey] = useState(0);

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setTimeout(() => setFormKey(k => k + 1), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`inline-flex items-center justify-center whitespace-nowrap text-sm cursor-pointer ${className || ""}`}
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Request your free audit</DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            A scored performance and conversion audit of your Shopify store
            Core Web Vitals from real-user data, the conversion leaks in your
            product page and cart, and every issue ranked Critical to Low with a
            phased action plan.
          </p>
        </DialogHeader>

        <TeardownForm key={formKey} />

        <p className="text-xs text-center text-muted-foreground">
          Free. Delivered as a written report within 3 working days.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default AuditModal;
