"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface selection:bg-highlight selection:text-panel relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Hero />
          <Services />
          <About />
          <Instructors />
          <Testimonials />
          <FAQSection />
          <Gallery />
          <Blog />
        </main>
        <Footer />
      </div>
    </div>
  );
}
