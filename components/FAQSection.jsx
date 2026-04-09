import { cn } from "@/lib/utils";
import {
  Calendar,
  Clock,
  Mail,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book a trail ride or lesson?",
    answer:
      "You can book directly through our website using the appointment form or by calling our office. We recommend booking at least 48 hours in advance.",
  },
  {
    question: "What safety measures do you have in place?",
    answer:
      "Our instructors are certified, and we ensure all riders wear helmets and follow safety guidelines. We also conduct regular health checks for all our horses.",
  },
  {
    question: "What should I wear for my first lesson?",
    answer:
      "We recommend long pants (jeans or leggings) and closed-toe shoes with a small heel. We provide safety helmets for all riders.",
  },
  {
    question: "How long does a riding lesson last?",
    answer:
      "Standard lessons are 60 minutes long, which includes grooming and tacking time. We also offer 30-minute sessions for younger children.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-panel p-8 md:p-12 rounded-[40px] shadow-2xl text-white"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 text-highlight font-medium mb-4">
                <span className="w-8 h-0.5 bg-highlight" />
                <span className="uppercase tracking-widest text-sm">
                  Appointment
                </span>
                <span className="w-8 h-0.5 bg-highlight" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Request A <br /> Training Session
              </h2>
            </div>

            <form className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-6 outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-6 outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  size={18}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-6 outline-none focus:border-secondary transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    size={18}
                  />
                  <input
                    type="date"
                    className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-6 outline-none focus:border-secondary transition-colors text-white/60"
                  />
                </div>
                <div className="relative">
                  <Clock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                    size={18}
                  />
                  <input
                    type="time"
                    className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-6 outline-none focus:border-secondary transition-colors text-white/60"
                  />
                </div>
              </div>
              <div className="relative">
                <MessageSquare
                  className="absolute left-4 top-4 text-white/40"
                  size={18}
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-3xl py-3 pl-12 pr-6 outline-none focus:border-secondary transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-highlight text-panel font-bold py-4 rounded-full hover:bg-white transition-all">
                Submit Now
              </button>
            </form>
          </motion.div>

          {/* FAQs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-brand font-bold mb-4"
            >
              <span className="w-6 h-0.5 bg-brand" />
              <span className="uppercase tracking-widest text-sm">FAQs</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-heading mb-12"
            >
              Frequently Asked <br /> Any Questions
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-100 rounded-3xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className={cn(
                      "w-full flex items-center justify-between p-6 text-left transition-colors",
                      openIndex === index
                        ? "bg-panel text-white"
                        : "bg-white text-heading hover:bg-gray-50",
                    )}
                  >
                    <span className="font-bold">{faq.question}</span>
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        openIndex === index
                          ? "bg-highlight text-panel"
                          : "bg-gray-100 text-heading",
                      )}
                    >
                      {openIndex === index ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 text-gray-600 leading-relaxed bg-white">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
