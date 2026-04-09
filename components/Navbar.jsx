import { cn } from "@/lib/utils";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["Home", "About", "Services", "Events", "Blog", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-secondary" />
              <span>Willow Creek Ranch, Colorado, USA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-secondary" />
              <span>example@horseno.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-secondary transition-colors">
              <Globe size={14} className="text-secondary" />
              <span>English</span>
              <span className="text-white/60">|</span>
            </div>
            <div className="flex items-center space-x-4">
              <Facebook
                size={14}
                className="cursor-pointer hover:text-secondary transition-colors"
              />
              <Twitter
                size={14}
                className="cursor-pointer hover:text-secondary transition-colors"
              />
              <Instagram
                size={14}
                className="cursor-pointer hover:text-secondary transition-colors"
              />
              <Youtube
                size={14}
                className="cursor-pointer hover:text-secondary transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "px-4 lg:px-8 transition-all duration-300",
          isScrolled ? "py-2.5 lg:py-3" : "py-3 lg:py-4",
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex justify-between items-center rounded-[20px] px-4 md:px-6 lg:px-8",
            "bg-accent border border-brand/15",
            isScrolled ? "py-3 shadow-lg" : "py-3.5 shadow-md",
          )}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/horse-logo/40/40"
                alt="Logo"
                className="w-8 h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-[38px] leading-none font-black text-heading tracking-tight">
                Horseno
              </h1>
              <p className="hidden sm:block text-[10px] uppercase tracking-[0.28em] text-secondary">
                Horse Means Love
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-9">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-[17px] font-semibold hover:text-brand transition-colors",
                  item === "Home" ? "text-brand" : "text-heading",
                )}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden border border-brand/20 bg-linear-to-b from-accent to-white shadow-xl animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col divide-y divide-brand/10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between px-4 py-3.5 text-primary text-base font-medium hover:bg-brand/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item}</span>
                  <span className="text-brand text-sm">+</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
