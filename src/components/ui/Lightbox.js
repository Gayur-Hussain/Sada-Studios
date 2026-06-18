"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, User, ArrowRight } from "lucide-react";

export default function Lightbox({ item, isOpen, onClose }) {
  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col md:flex-row bg-black/95 backdrop-blur-md overflow-y-auto md:overflow-hidden"
        >
          {/* Main Media Container */}
          <div className="relative flex-1 flex items-center justify-center bg-black/50 p-4 md:p-12 min-h-[50vh] md:min-h-screen">
            {/* Close Button Mobile Header */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-gold/20 hover:text-gold text-white transition-colors duration-300 md:hidden cursor-pointer"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-5xl h-full flex items-center justify-center"
            >
              {item.type === "video" ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 luxury-glow">
                  <video
                    src={item.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    poster={item.image}
                  />
                </div>
              ) : (
                <div className="relative max-h-[70vh] md:max-h-[85vh] w-full h-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[70vh] md:max-h-[85vh] max-w-full object-contain rounded-sm border border-white/5 shadow-2xl"
                  />
                </div>
              )}
            </motion.div>
          </div>

          {/* Details Sidebar */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[450px] bg-obsidian border-t md:border-t-0 md:border-l border-white/10 p-8 md:p-12 flex flex-col justify-between shrink-0"
          >
            <div>
              {/* Close Button Desktop */}
              <div className="hidden md:flex justify-end mb-8">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full border border-white/10 hover:border-gold/50 hover:bg-gold/10 hover:text-gold text-zinc-400 transition-all duration-300 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Title & Tag */}
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium mb-3 block">
                {item.category}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-zinc-100 font-light mb-2 tracking-tight">
                {item.title}
              </h2>
              <p className="text-sm italic text-zinc-400 font-serif mb-8">
                {item.subtitle}
              </p>

              <div className="border-t border-b border-white/10 py-6 mb-8 space-y-4 text-xs tracking-wider text-zinc-300">
                <div className="flex items-center gap-3">
                  <User size={14} className="text-gold shrink-0" />
                  <span className="text-zinc-500 uppercase mr-1 w-16">Client</span>
                  <span>{item.details?.client || "Editorial"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-gold shrink-0" />
                  <span className="text-zinc-500 uppercase mr-1 w-16">Location</span>
                  <span>{item.details?.location || "TBD"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={14} className="text-gold shrink-0" />
                  <span className="text-zinc-500 uppercase mr-1 w-16">Year</span>
                  <span>{item.details?.year || "2025"}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                  The Story
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed font-light">
                  {item.details?.description}
                </p>
              </div>
            </div>

            {/* Inquiry Trigger */}
            <div className="mt-12 md:mt-0">
              <a
                href="#contact"
                onClick={onClose}
                className="group w-full flex items-center justify-between py-4 border-b border-white/10 hover:border-gold text-zinc-200 hover:text-gold transition-colors duration-300 text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Inquire About A Similar Concept
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300 text-gold" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
