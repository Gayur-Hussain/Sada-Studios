"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Calendar,
  MapPin,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Video,
  Film,
  Camera,
  Heart,
  ChevronRight,
  ChevronDown,
  Send,
  Check
} from "lucide-react";

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

import Lightbox from "@/components/ui/Lightbox";
import {
  CATEGORIES,
  PORTFOLIO_ITEMS,
  SIGNATURE_PROJECTS,
  TESTIMONIALS,
  BEHIND_THE_SCENES
} from "@/data/portfolio";

const SERVICE_OPTIONS = [
  { value: "weddings", label: "Weddings & Pre-Weddings" },
  { value: "commercial", label: "Commercial Ads & Commercials" },
  { value: "fashion", label: "Fashion & Product Editorials" },
  { value: "corporate", label: "Corporate Events & Documentaries" },
  { value: "luxury-events", label: "Luxury Gala & Birthdays" }
];

const BUDGET_OPTIONS = [
  { value: "under-3lakhs", label: "Under ₹3 Lakhs" },
  { value: "3lakhs-8lakhs", label: "₹3 Lakhs – ₹8 Lakhs" },
  { value: "8lakhs-15lakhs", label: "₹8 Lakhs – ₹15 Lakhs" },
  { value: "above-15lakhs", label: "Above ₹15 Lakhs" }
];

const CustomSelect = ({ value, onChange, options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className="relative space-y-1 w-full">
      <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold block">
        {label}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="border-b border-white/10 bg-transparent text-zinc-300 hover:text-white py-3.5 w-full text-sm font-light cursor-pointer flex justify-between items-center transition-colors duration-300 focus:border-gold outline-none select-none"
      >
        <span>{selectedOption.label}</span>
        <ChevronDown size={14} className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close */}
            <div className="fixed inset-0 z-30 cursor-default" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 top-full mt-2 w-full bg-zinc-950 border border-white/10 rounded-sm shadow-2xl z-40 overflow-hidden max-h-60 overflow-y-auto"
            >
              {options.map((opt) => (
                <div
                  key={opt.value}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3.5 text-[10px] tracking-widest uppercase cursor-pointer hover:bg-gold/10 hover:text-gold transition-colors duration-200 border-b border-white/5 last:border-b-0 ${
                    value === opt.value ? 'text-gold bg-gold/5 font-semibold' : 'text-zinc-400'
                  }`}
                >
                  {opt.label}
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeItem, setActiveItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "weddings",
    date: "",
    location: "",
    budget: "3lakhs-8lakhs",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Monitor scrolling to style navigation bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Handle contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "weddings",
        date: "",
        location: "",
        budget: "3lakhs-8lakhs",
        message: ""
      });
    }, 2000);
  };

  // Filter portfolio items
  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-obsidian text-zinc-100 selection:bg-gold selection:text-obsidian flex flex-col font-sans">

      {/* 1. HEADER / NAVIGATION */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out border-b py-6 ${scrolled
          ? "bg-black/90 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col select-none group">
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-light text-white group-hover:text-gold transition-colors duration-500">
              ANTIGRAVITY
            </span>
            <span className="text-[9px] tracking-[0.45em] text-zinc-500 uppercase -mt-0.5 group-hover:text-gold-bright transition-colors duration-500">
              FILM & PHOTO
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-semibold text-zinc-300">
            <a href="#featured" className="hover:text-gold transition-colors duration-300">
              Featured
            </a>
            <a href="#portfolio" className="hover:text-gold transition-colors duration-300">
              Portfolio
            </a>
            <a href="#signature" className="hover:text-gold transition-colors duration-300">
              Signature
            </a>
            <a href="#about" className="hover:text-gold transition-colors duration-300">
              Agency
            </a>
            <a href="#process" className="hover:text-gold transition-colors duration-300">
              Process
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-gold/40 hover:border-gold rounded-full text-gold hover:bg-gold/10 transition-all duration-300 cursor-pointer"
            >
              Book Consultation
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-zinc-300 hover:text-gold transition-colors p-2 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex flex-col p-8 justify-between"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-xl tracking-[0.2em] font-light">ANTIGRAVITY</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 text-zinc-400 hover:text-gold cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 font-serif text-3xl font-light text-zinc-300 tracking-wide mt-12">
              <a
                href="#featured"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors"
              >
                Featured
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors"
              >
                Portfolio Grid
              </a>
              <a
                href="#signature"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors"
              >
                Signature Projects
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors"
              >
                The Agency
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors"
              >
                Our Process
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gold tracking-wide hover:text-gold-bright transition-colors"
              >
                Inquire Now
              </a>
            </nav>

            <div className="flex justify-between items-center text-xs tracking-widest text-zinc-500 border-t border-white/10 pt-6">
              <span>MUMBAI / NEW DELHI / UDAIPUR</span>
              <a href="#" className="text-zinc-400 hover:text-gold">
                @ANTIGRAVITY
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">

        {/* 2. CINEMATIC HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
          {/* Background image with Ken Burns Zoom Effect */}
          <div className="absolute inset-0 z-0">
            <motion.div
              initial={{ scale: 1.07, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.65 }}
              transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative"
            >
              <Image
                src="/17.png"
                alt="Cinematic Hero"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/40 to-black/70" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[75vh] mt-16 md:mt-24">
            {/* Top Empty Space for layout balancing */}
            <div className="hidden md:block"></div>

            {/* Central Headline */}
            <div className="max-w-4xl space-y-6 md:space-y-8 my-auto">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium block animate-fade-in">
                International Cinema & Photography Studio
              </span>

              <div className="overflow-hidden">
                <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-extralight leading-[1.1] tracking-tight text-white animate-slide-up">
                  Crafting Visual <br />
                  <span className="font-serif italic text-gold">Heirlooms</span>
                </h1>
              </div>

              <p className="text-zinc-300 font-light text-base md:text-xl max-w-2xl leading-relaxed tracking-wide animate-fade-in delay-500">
                For brands, luxury events, and couples who believe in the emotional weight of a single, perfectly graded frame. We document raw elegance.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in delay-700">
                <a
                  href="#portfolio"
                  className="px-8 py-3.5 bg-gold hover:bg-gold-bright text-obsidian rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/20 flex items-center gap-2 group cursor-pointer"
                >
                  Explore Work
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3.5 border border-white/20 hover:border-gold rounded-full text-white hover:text-gold hover:bg-white/5 transition-all duration-300 text-xs uppercase tracking-widest cursor-pointer"
                >
                  Consultation
                </a>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-white/10 pt-8 mt-12 gap-6 text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">
              <div className="flex gap-8">
                <span>WEDDINGS</span>
                <span>•</span>
                <span>COMMERCIALS</span>
                <span>•</span>
                <span>FASHION</span>
              </div>
              <a
                href="#featured"
                className="flex items-center gap-3 text-zinc-400 hover:text-gold transition-colors duration-300 group cursor-pointer"
              >
                Scroll to view
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowDown size={14} className="text-gold" />
                </motion.div>
              </a>
            </div>
          </div>
        </section>

        {/* 3. FEATURED WORK (ASYNCHRONOUS EDITORIAL SECTION) */}
        <section id="featured" className="py-24 md:py-36 bg-obsidian border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16 md:mb-24">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                  Curated Showcase
                </span>
                <h2 className="font-serif text-3xl md:text-6xl font-light text-white tracking-tight leading-tight">
                  Flagship <span className="font-serif italic text-gold">Stories</span>
                </h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-md ml-auto">
                  A handpicked selection of our global campaigns. Capturing raw emotional narratives across continents, blending fine-art editorial standards with premium cinema techniques.
                </p>
              </div>
            </div>

            {/* Asymmetric Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

              {/* Left Item - Big Wide Project */}
              <div className="md:col-span-8 group cursor-pointer" onClick={() => { setActiveItem(PORTFOLIO_ITEMS[0]); setLightboxOpen(true); }}>
                <div className="relative aspect-16/10 overflow-hidden border border-white/10 rounded-sm luxury-glow">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                  <Image
                    src={PORTFOLIO_ITEMS[0].image}
                    alt={PORTFOLIO_ITEMS[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 800px"
                    priority
                    className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-6 right-6 z-20 flex gap-2">
                    <span className="p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-gold shadow-lg">
                      <Film size={16} />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/80 via-black/30 to-transparent z-20 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-2 block">
                      Featured Film
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-tight mb-2">
                      {PORTFOLIO_ITEMS[0].title}
                    </h3>
                    <p className="text-zinc-300 text-xs md:text-sm font-light">
                      {PORTFOLIO_ITEMS[0].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Item - Portrait Project */}
              <div className="md:col-span-4 group cursor-pointer flex flex-col justify-between" onClick={() => { setActiveItem(PORTFOLIO_ITEMS[1]); setLightboxOpen(true); }}>
                <div className="relative aspect-3/4 overflow-hidden border border-white/10 rounded-sm luxury-glow mb-6">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                  <Image
                    src={PORTFOLIO_ITEMS[1].image}
                    alt={PORTFOLIO_ITEMS[1].title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute top-6 right-6 z-20 flex gap-2">
                    <span className="p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-gold shadow-lg">
                      <Camera size={16} />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-linear-to-t from-black/80 via-black/30 to-transparent z-20">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-2 block">
                      High-Fashion Editorial
                    </span>
                    <h3 className="font-serif text-2xl font-light text-white tracking-tight mb-2">
                      {PORTFOLIO_ITEMS[1].title}
                    </h3>
                    <p className="text-zinc-300 text-xs font-light">
                      {PORTFOLIO_ITEMS[1].subtitle}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. PORTFOLIO CATEGORIES & MASONRY GRID */}
        <section id="portfolio" className="py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                  Interactive Gallery
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
                  Portfolio <span className="font-serif italic text-gold">Archive</span>
                </h2>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold border-b border-white/10 pb-4 w-full md:w-auto">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 border rounded-full transition-all duration-300 cursor-pointer ${selectedCategory === category.id
                      ? "border-gold text-gold bg-gold/5"
                      : "border-transparent text-zinc-400 hover:text-white"
                      }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Masonry-like Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      setActiveItem(item);
                      setLightboxOpen(true);
                    }}
                    className={`group relative overflow-hidden rounded-sm border border-white/5 bg-zinc-950 luxury-glow cursor-pointer ${item.aspect || "aspect-4/5"
                      }`}
                  >
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20 opacity-60 group-hover:opacity-85 transition-opacity duration-500 z-10" />

                    {/* Media Thumbnail */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-104 transition-transform duration-700 ease-out"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />

                    {/* Format Icon top-right */}
                    <div className="absolute top-5 right-5 z-20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="p-2.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-gold block shadow-lg">
                        {item.type === "video" ? <Play size={12} fill="currentColor" /> : <Camera size={12} />}
                      </span>
                    </div>

                    {/* Stills Title Info bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-medium mb-2.5 block transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-light text-zinc-100 tracking-tight mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-xs font-light tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* 5. SIGNATURE PROJECTS (SPLIT SCREEN SPOTLIGHT) */}
        <section id="signature" className="py-24 md:py-36 bg-obsidian border-t border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="max-w-2xl space-y-4 mb-20 md:mb-28">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                Deep Dive Series
              </span>
              <h2 className="font-serif text-3xl md:text-6xl font-light text-white tracking-tight">
                Signature <span className="font-serif italic text-gold">Spotlights</span>
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-lg">
                Exclusive visual diaries containing immersive write-ups, fine-art photographs, and short films documenting grand global celebrations.
              </p>
            </div>

            {/* Signature Project Rows */}
            <div className="space-y-32">
              {SIGNATURE_PROJECTS.map((proj, index) => (
                <div
                  key={proj.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* Left Side: Large Image */}
                  <div className="w-full lg:w-3/5 group overflow-hidden border border-white/10 rounded-sm luxury-glow">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* Right Side: Editorial Info */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                      {proj.category}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-white tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-zinc-300 text-sm font-light leading-relaxed">
                      {proj.description}
                    </p>

                    <blockquote className="border-l-2 border-gold pl-6 py-1 italic font-serif text-zinc-400 text-sm leading-relaxed my-6">
                      `{proj.quote}`
                    </blockquote>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-gold hover:text-gold-bright transition-colors group cursor-pointer"
                    >
                      Inquire details
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. BEHIND THE SCENES */}
        <section className="py-24 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                Craft & Production
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
                Behind <span className="font-serif italic text-gold">The Lens</span>
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Take a look at our workflows, advanced cine gear, and our dedicated team capturing beauty across the globe.
              </p>
            </div>

            {/* Image Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BEHIND_THE_SCENES.map((bts, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="relative aspect-4/3 overflow-hidden border border-white/10 rounded-sm luxury-glow">
                    <Image
                      src={bts.image}
                      alt={bts.title}
                      className="w-full h-full object-cover grayscale scale-100 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                  <h3 className="font-serif text-lg text-white font-light group-hover:text-gold transition-colors duration-300">
                    {bts.title}
                  </h3>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {bts.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. TESTIMONIALS SLIDER */}
        <section className="py-24 md:py-32 bg-obsidian border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex items-center justify-center">
            <span className="text-[25vw] font-serif font-extrabold text-white text-stroke-gold">
              VOICES
            </span>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block mb-8">
              Client Stories
            </span>

            <div className="min-h-55 md:min-h-40 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <p className="font-serif text-2xl md:text-3xl font-light text-zinc-200 italic leading-relaxed">
                    `{TESTIMONIALS[currentTestimonial].quote}`
                  </p>
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-gold">
                      {TESTIMONIALS[currentTestimonial].author}
                    </h4>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">
                      {TESTIMONIALS[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonials Pagination dots */}
            <div className="flex justify-center gap-3 mt-12">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentTestimonial === idx ? "w-6 bg-gold" : "bg-zinc-700"
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 8. ABOUT AGENCY MANIFESTO */}
        <section id="about" className="py-24 md:py-36 bg-black border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left Column: Big Manifesto Title */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                  The Philosophy
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.15]">
                  We believe in <br />
                  the silent <br />
                  <span className="font-serif italic text-gold">moments</span>
                </h2>
                <div className="h-0.5 w-20 bg-gold my-8"></div>
              </div>

              {/* Right Column: Narrative Copy */}
              <div className="lg:col-span-7 space-y-8 text-zinc-300 font-light text-base md:text-lg leading-relaxed tracking-wide">
                <p className="font-serif text-xl md:text-2xl text-zinc-100 font-light leading-relaxed">
                  `${" Every frame must evoke an emotion, carry a scent of nostalgia, and register as a piece of curated history."}`
                </p>
                <p>
                  Founded by a premier alliance of fine-art photographers and high-concept cinematographers, Antigravity operates at the intersection of cinema and luxury editorial. We document weddings, commercial ads, and campaigns with a meticulous eye for styling, natural light, and structural composition.
                </p>
                <p>
                  We are based in India with physical production hubs in **Mumbai**, **New Delhi**, and **Udaipur**, executing assignments worldwide for a demanding roster of private clients, designers, and legacy brands.
                </p>

                {/* Director details */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 text-xs tracking-wider uppercase font-semibold">
                  <div>
                    <span className="text-zinc-500 block mb-1">Director of Cinema</span>
                    <span className="text-gold">Kabir Malhotra</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">Director of Photography</span>
                    <span className="text-gold">Rhea Sen</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 9. BOOKING PROCESS (EDITORIAL TIMELINE) */}
        <section id="process" className="py-24 bg-obsidian border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="max-w-2xl space-y-4 mb-20">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                The Journey
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-light text-white tracking-tight">
                Our Signature <span className="font-serif italic text-gold">Process</span>
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                We believe that premium output requires a meticulous structure. Here is how we craft your visual story.
              </p>
            </div>

            {/* Horizontal timeline cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

              <div className="space-y-4 border-t border-white/10 pt-6 group">
                <span className="font-serif text-3xl md:text-4xl text-zinc-600 group-hover:text-gold transition-colors duration-300 font-extralight block">
                  01
                </span>
                <h3 className="font-serif text-lg text-white font-medium">
                  Creative Consult
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  A high-end styling and creative alignment. We dive deep into your aesthetic references, location lighting, and cinematic vibe.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 group">
                <span className="font-serif text-3xl md:text-4xl text-zinc-600 group-hover:text-gold transition-colors duration-300 font-extralight block">
                  02
                </span>
                <h3 className="font-serif text-lg text-white font-medium">
                  Pre-Production
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  Detailed storyboard design, location scouting notes, scheduling optimal light windows (Golden Hour scheduling), and choosing camera lenses.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 group">
                <span className="font-serif text-3xl md:text-4xl text-zinc-600 group-hover:text-gold transition-colors duration-300 font-extralight block">
                  03
                </span>
                <h3 className="font-serif text-lg text-white font-medium">
                  The Production
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  Capturing with our signature low-profile style. We work unobtrusively, capturing raw moments without interrupting the emotional flow of the set.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 group">
                <span className="font-serif text-3xl md:text-4xl text-zinc-600 group-hover:text-gold transition-colors duration-300 font-extralight block">
                  04
                </span>
                <h3 className="font-serif text-lg text-white font-medium">
                  Master Post-Prod
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  Bespoke color grading, custom sound-design layering, and artisanal editing. Stills delivered in high-res archives, with hand-bound leather albums.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 10. LUXURY BOOKING & CONTACT FORM */}
        <section id="contact" className="py-24 md:py-36 bg-black border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left Column Details */}
              <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                    Inquire Booking
                  </span>
                  <h2 className="font-serif text-4xl md:text-6xl font-light text-white tracking-tight leading-none">
                    Begin Your <br />
                    <span className="font-serif italic text-gold">Legacy</span>
                  </h2>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
                    Our bookings are highly limited to preserve bespoke production and editing quality. Contact us today to secure your dates.
                  </p>
                </div>

                <div className="space-y-4 text-xs tracking-wider text-zinc-400">
                  <div className="border-t border-white/10 pt-6">
                    <span className="text-zinc-600 block uppercase mb-1">Global Studio Inquiries</span>
                    <a href="mailto:studio@antigravityfilms.com" className="text-white hover:text-gold transition-colors font-medium">
                      studio@antigravityfilms.com
                    </a>
                  </div>
                  <div>
                    <span className="text-zinc-600 block uppercase mb-1">Press & Media</span>
                    <a href="mailto:press@antigravityfilms.com" className="text-white hover:text-gold transition-colors font-medium">
                      press@antigravityfilms.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Minimal Line Input Form */}
              <div className="lg:col-span-7 bg-obsidian border border-white/10 p-8 md:p-12 rounded-sm luxury-glow">

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 space-y-6"
                  >
                    <span className="p-4 bg-gold/10 border border-gold rounded-full text-gold">
                      <Check size={32} />
                    </span>
                    <h3 className="font-serif text-3xl font-light text-white">Inquiry Received</h3>
                    <p className="text-zinc-400 text-sm font-light max-w-sm leading-relaxed">
                      Thank you for sharing your vision. A senior coordinator will reach out to you within 24 hours to schedule our alignment call.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Two Column Layout on Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="border-b border-white/10 bg-transparent text-white focus:border-gold outline-none py-3.5 transition-colors duration-500 w-full text-sm font-light placeholder-zinc-700"
                          placeholder="Alexandra Miller"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="border-b border-white/10 bg-transparent text-white focus:border-gold outline-none py-3.5 transition-colors duration-500 w-full text-sm font-light placeholder-zinc-700"
                          placeholder="alexandra@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Service Type */}
                      <CustomSelect
                        label="Service Requested"
                        value={formData.service}
                        onChange={(val) => setFormData({ ...formData, service: val })}
                        options={SERVICE_OPTIONS}
                      />

                      {/* Event Date */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold block">
                          Proposed Date
                        </label>
                        <input
                          type="text"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="border-b border-white/10 bg-transparent text-white focus:border-gold outline-none py-3.5 transition-colors duration-500 w-full text-sm font-light placeholder-zinc-700"
                          placeholder="MM / DD / YYYY"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Location */}
                      <div className="space-y-1">
                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold block">
                          Event Location
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="border-b border-white/10 bg-transparent text-white focus:border-gold outline-none py-3.5 transition-colors duration-500 w-full text-sm font-light placeholder-zinc-700"
                          placeholder="Udaipur / Jaipur / Goa / Mumbai"
                        />
                      </div>

                      {/* Budget */}
                      <CustomSelect
                        label="Budget Range"
                        value={formData.budget}
                        onChange={(val) => setFormData({ ...formData, budget: val })}
                        options={BUDGET_OPTIONS}
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold block">
                        Share Your Vision
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-b border-white/10 bg-transparent text-white focus:border-gold outline-none py-3.5 transition-colors duration-500 w-full text-sm font-light placeholder-zinc-700 min-h-25 resize-none"
                        placeholder="Tell us about the emotional vibe, styling direction, or timeline details..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-gold hover:bg-gold-bright text-obsidian rounded-sm font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold/5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Transmission...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send size={12} fill="currentColor" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 11. FOOTER */}
      <footer className="bg-obsidian border-t border-white/10 py-16 md:py-24 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

          <div className="space-y-4">
            <span className="font-serif text-2xl tracking-[0.20em] text-white">ANTIGRAVITY</span>
            <p className="text-xs text-zinc-500 tracking-wider max-w-xs leading-relaxed font-light">
              Premium photography & film services for global events, luxury brands, and storytelling manifestos.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-xs uppercase tracking-[0.2em]">
            <div>
              <span className="text-zinc-600 block mb-3 font-semibold">Headquarters</span>
              <ul className="space-y-2 text-zinc-300 font-light">
                <li>Mumbai, Colaba</li>
                <li>New Delhi, Lodhi</li>
                <li>Udaipur, Lake Palace Rd</li>
              </ul>
            </div>
            <div>
              <span className="text-zinc-600 block mb-3 font-semibold">Socials</span>
              <ul className="space-y-2 text-zinc-300 font-light">
                <li>
                  <a href="#" className="hover:text-gold transition-colors flex items-center gap-1">
                    Instagram <Instagram size={10} />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Vimeo</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest gap-4">
          <span>&copy; {new Date().getFullYear()} ANTIGRAVITY. All rights reserved.</span>
          <span>Crafted with pure luxury design.</span>
        </div>
      </footer>

      {/* LIGHTBOX COMPONENT */}
      <Lightbox
        item={activeItem}
        isOpen={lightboxOpen}
        onClose={() => {
          setLightboxOpen(false);
          setActiveItem(null);
        }}
      />

    </div>
  );
}
