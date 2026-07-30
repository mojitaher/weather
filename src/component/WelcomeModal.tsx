// WelcomeModal.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";

type WelcomeModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function WelcomeModal({
  open,
  onClose,
  children,
}: WelcomeModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/30 shadow-2xl px-6 py-8 text-white"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <XIcon />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
