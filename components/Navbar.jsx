import { cn } from "@/lib/utils";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

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
          "transition-all duration-300 px-4 lg:px-8",
          isScrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-6",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
              <h1
                className={cn(
                  "text-2xl font-bold leading-none",
                  isScrolled ? "text-primary" : "text-white",
                )}
              >
                Horseno
              </h1>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-widest",
                  isScrolled ? "text-secondary" : "text-secondary",
                )}
              >
                Horse Means Love
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {["Home", "About", "Services", "Pages", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "text-sm font-medium hover:text-secondary transition-colors",
                    isScrolled ? "text-primary" : "text-white",
                  )}
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* Actions */}
          {/* <div className="flex items-center space-x-4">
            <div
              className={cn(
                "hidden md:flex items-center border rounded-full px-3 py-1.5",
                isScrolled
                  ? "border-gray-200 bg-gray-50"
                  : "border-white/20 bg-white/10",
              )}
            >
              <input
                type="text"
                placeholder="Search..."
                className={cn(
                  "bg-transparent border-none outline-none text-xs w-24 focus:w-40 transition-all",
                  isScrolled
                    ? "text-primary placeholder:text-gray-400"
                    : "text-white placeholder:text-white/60",
                )}
              />
              <Search
                size={16}
                className={isScrolled ? "text-primary" : "text-white"}
              />
            </div>

            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X
                  size={24}
                  className={isScrolled ? "text-primary" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={isScrolled ? "text-primary" : "text-white"}
                />
              )}
            </button>

            <button className="hidden lg:flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all">
              <Menu size={20} />
            </button>
          </div> */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
            {["Home", "About", "Services", "Pages", "Blog", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary text-lg font-medium border-b border-gray-50 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
