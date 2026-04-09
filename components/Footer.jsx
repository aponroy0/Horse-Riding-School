import { ChevronRight, Headphones, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Our Services",
    "Our Project",
    "Team",
    "Blog Post",
    "Contact Us",
  ];

  const exploreLinks = [
    "What We Offer",
    "Customer Feedback",
    "Latest Post",
    "Help Center",
    "Terms & Condition",
  ];

  const instagramImages = [
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1593179357196-ea11a2e7c119?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1546700836-9baec4f7c3b8?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=240&q=80",
    "https://images.unsplash.com/photo-1573353921701-8f3297d93654?auto=format&fit=crop&w=240&q=80",
  ];

  return (
    <footer className="text-white bg-gradient-to-r from-footer-start via-footer-mid to-footer-end">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shrink-0">
                <img
                  src="https://api.iconify.design/mdi:horse-head.svg?color=%232C4B3B"
                  alt="Horseno logo"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h2 className="text-3xl leading-none font-semibold">Horseno</h2>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/70 mt-1">
                  Horse Means Love
                </p>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-7 max-w-xs mb-6">
              Welcome to Horseno, your ultimate destination for all things
              equestrian! Whether you are a seasoned rider or just beginning
              your journey with Horseno.
            </p>
          </div>

          <div>
            <h3 className="text-[34px] sm:text-[36px] leading-none font-semibold mb-2">
              Quick Link
            </h3>
            <div className="w-11 h-[3px] bg-highlight-soft mb-6" />
            <ul className="space-y-3.5 text-white/85 text-sm">
              {quickLinks.map((link, index) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`group inline-flex items-center gap-2.5 transition-colors ${index === 1 ? "text-highlight-soft" : "hover:text-highlight-soft"}`}
                  >
                    <ChevronRight size={14} className="shrink-0" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[34px] sm:text-[36px] leading-none font-semibold mb-2">
              Explore
            </h3>
            <div className="w-11 h-[3px] bg-highlight-soft mb-6" />
            <ul className="space-y-3.5 text-white/85 text-sm">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 hover:text-highlight-soft transition-colors"
                  >
                    <ChevronRight size={14} className="shrink-0" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-footer-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 text-footer-plain">
            <div className="flex items-center gap-3 md:pr-5 md:border-r md:border-footer-divider">
              <MapPin
                className="w-8 h-8 text-highlight shrink-0"
                strokeWidth={2.2}
              />
              <p className="text-[29px] sm:text-[30px] font-semibold leading-tight">
                Willow Creek Ranch, Colorado, USA
              </p>
            </div>
            <div className="flex items-center gap-3 md:px-5 md:border-r md:border-footer-divider">
              <Mail
                className="w-8 h-8 text-highlight shrink-0"
                strokeWidth={2.2}
              />
              <div>
                <p className="text-xs text-white/85 mb-0.5">Email Address</p>
                <p className="text-[29px] sm:text-[30px] font-semibold leading-none">
                  example@horseno.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:pl-5">
              <Headphones
                className="w-8 h-8 text-highlight shrink-0"
                strokeWidth={2.2}
              />
              <div>
                <p className="text-xs text-white/85 mb-0.5">
                  Call Us For Support
                </p>
                <p className="text-[29px] sm:text-[30px] font-semibold leading-none">
                  +(006) 1365 000 299
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footer-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 text-center text-sm text-footer-text">
          Copyright © 2024 <span className="text-highlight">Horseno</span>. All
          rights reserved by <span className="text-highlight">Vecuro</span>
        </div>
      </div>
    </footer>
  );
}
