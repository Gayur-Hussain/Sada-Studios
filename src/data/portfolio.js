// Portfolio data for premium photography and cinematography agency (Indian Context)
export const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "weddings", label: "Weddings & Pre-Weddings" },
  { id: "commercial", label: "Commercials & Ads" },
  { id: "fashion", label: "Fashion & Editorial" },
  { id: "corporate", label: "Corporate & Documentary" },
  { id: "events", label: "Luxury Events" },
  { id: "lifestyle", label: "Social & Lifestyle" }
];

export const PORTFOLIO_ITEMS = [
  {
    id: "elysian-vows",
    title: "Elysian Vows",
    subtitle: "A grand royal wedding story in Udaipur",
    category: "weddings",
    type: "video",
    image: "/2.png",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replaceable with client video
    aspect: "aspect-[16/9] md:col-span-2",
    details: {
      client: "Ananya & Kabir",
      location: "Taj Lake Palace, Udaipur, Rajasthan",
      year: "2025",
      description: "A grand, emotional wedding film captured on anamorphic lenses. Blending royal Rajasthani heritage, boat processions, and candlelit courtyard dances with modern cinematic pacing, capturing the raw elegance of Udaipur."
    }
  },
  {
    id: "vanguard-silhouette",
    title: "Vanguard Silhouette",
    subtitle: "Festive luxury couture editorial",
    category: "fashion",
    type: "image",
    image: "/4.png",
    aspect: "aspect-[3/4]",
    details: {
      client: "Raw Mango / Sabyasachi",
      location: "Humayun's Tomb, New Delhi",
      year: "2025",
      description: "A high-contrast festive couture editorial focusing on silk textures, shadows, and traditional silhouettes. Published in Vogue India."
    }
  },
  {
    id: "monolith-essence",
    title: "Monolith Essence",
    subtitle: "Luxury ayurvedic elixir ad campaign",
    category: "commercial",
    type: "video",
    image: "/1.png",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    aspect: "aspect-[4/5]",
    details: {
      client: "Kama Ayurveda / Forest Essentials",
      location: "Himalayan Foothills, Rishikesh",
      year: "2026",
      description: "A premium commercial campaign combining natural sunlight with slow-motion cinematography of flowing water in Rishikesh to reflect organic luxury."
    }
  },
  {
    id: "lucid-dreaming",
    title: "Lucid Dreaming",
    subtitle: "Nostalgic music video for indie artist",
    category: "commercial",
    type: "video",
    image: "/5.png",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    aspect: "aspect-[16/9] md:col-span-2",
    details: {
      client: "Prateek Kuhad / Ritviz",
      location: "Brutalist Estate, Chandigarh",
      year: "2025",
      description: "A hazy, nostalgic music video styled with heavy grain, warm lights, and lens flares to capture Chandigarh's modern architectural shadows."
    }
  },
  {
    id: "gilded-gala",
    title: "The Gilded Gala",
    subtitle: "Annual charity ball in South Mumbai",
    category: "events",
    type: "image",
    image: "/6.png",
    aspect: "aspect-[4/5]",
    details: {
      client: "NMACC Foundation, Mumbai",
      location: "The Taj Mahal Palace, Mumbai",
      year: "2025",
      description: "Documenting the elegance of Mumbai's cultural elite gala. Focus on warm candlelight bokeh, candid interactions, and details of luxury tablescapes."
    }
  },
  {
    id: "silent-manifesto",
    title: "Silent Manifesto",
    subtitle: "Architectural brick minimalism",
    category: "lifestyle",
    type: "image",
    image: "/7.png",
    aspect: "aspect-[3/4]",
    details: {
      client: "Doshi Associates",
      location: "Ahmedabad, Gujarat",
      year: "2026",
      description: "A serene photo series highlighting brick and concrete shadows, sharp geometry, and structural interactions in BV Doshi's iconic structures."
    }
  },
  {
    id: "nocturnal-drift",
    title: "Nocturnal Drift",
    subtitle: "Luxury electric EV launch ad",
    category: "commercial",
    type: "video",
    image: "/8.png",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    aspect: "aspect-[16/9] md:col-span-2",
    details: {
      client: "Mahindra Luxury / Tata EV",
      location: "Bandra-Worli Sea Link, Mumbai",
      year: "2026",
      description: "Cinematography of a high-performance EV carving through Mumbai's Bandra-Worli Sea Link at dusk. Capturing high-speed motion blurs and wet marine drive reflections."
    }
  },
  {
    id: "raw-sculpture",
    title: "Raw Sculpture",
    subtitle: "Polki & Heritage jewelry campaign",
    category: "fashion",
    type: "image",
    image: "/9.png",
    aspect: "aspect-[3/4]",
    details: {
      client: "Sabyasachi Fine Jewelry",
      location: "Jaipur, Rajasthan",
      year: "2025",
      description: "A close-up photographic exploration of uncut Polki diamonds, gold, and hand-carved heritage jewelry. Embracing high-contrast studio shadows."
    }
  },
  {
    id: "whisper-of-wind",
    title: "Whisper of Wind",
    subtitle: "Documenting Pashmina weavers in Ladakh",
    category: "corporate",
    type: "video",
    image: "/10.png",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    aspect: "aspect-[4/5]",
    details: {
      client: "Ladakh Heritage Council",
      location: "Changtang Plains, Ladakh",
      year: "2025",
      description: "A touching documentary short about the nomadic Changpa families harvesting fine Cashmere wool in the high altitude plains of Ladakh."
    }
  }
];

export const SIGNATURE_PROJECTS = [
  {
    id: "sig-amalfi",
    title: "Aura of Udaipur",
    category: "Weddings / Cinematography",
    description: "An immersive three-day royal wedding campaign in Udaipur, Rajasthan. Captured on 35mm film and digital cinema platforms, merging classic Indian heritage aesthetics with modern editorial pacing.",
    image: "/11.png",
    link: "#",
    quote: "They didn't just record our wedding; they made us feel like we were characters in a timeless Rajasthani romance film."
  },
  {
    id: "sig-cyber",
    title: "Chronicles of South Mumbai",
    category: "Commercial / Brand Ads",
    description: "A high-concept commercial campaign shot in South Mumbai. Blending heritage Victorian architecture with futuristic kinetic editing to represent India's luxury evolution.",
    image: "/12.png",
    link: "#",
    quote: "A masterpiece of sensory storytelling. It shattered the boundaries of traditional advertising in India."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Antigravity Film & Photo operates at an entirely different tier. Their cinematic style and visual direction made our brand campaign look like a multimillion-dollar feature film.",
    author: "Meera Sen",
    role: "Creative Director, Raw Mango"
  },
  {
    quote: "We wanted our wedding film to be heirloom-grade, and they delivered exactly that. Every frame looks like a fine art print. They captured the absolute soul of our wedding in Udaipur.",
    author: "Ananya & Kabir",
    role: "Udaipur Palace Wedding Couple"
  },
  {
    quote: "Their documentary about our heritage vineyard captured our history with beautiful emotional resonance. The pacing, sound design, and visuals were pure poetry.",
    author: "Vikram Grover",
    role: "Founder, Grover Estates"
  }
];

export const BEHIND_THE_SCENES = [
  {
    title: "On Set in Jaipur",
    description: "Configuring the RED V-Raptor setup for the Sabyasachi Jewelry campaign.",
    image: "/14.png"
  },
  {
    title: "Editing Suite",
    description: "Color grading the Udaipur Palace wedding film on DaVinci Resolve.",
    image: "/15.png"
  },
  {
    title: "Golden Hour Capture",
    description: "Stills photography using a Leica M11 in Ladakh.",
    image: "/16.png"
  }
];
