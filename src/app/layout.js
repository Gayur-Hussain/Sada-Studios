import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "ANTIGRAVITY // Luxury Photography & Cinematography Agency",
  description: "A premier creative studio delivering heirloom-grade wedding films, luxury event coverage, high-fashion editorials, and commercial brand advertising worldwide.",
  openGraph: {
    title: "ANTIGRAVITY // Luxury Photography & Cinematography",
    description: "Premium visual storytelling for weddings, fashion, and brands.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-obsidian text-foreground flex flex-col selection:bg-gold selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
