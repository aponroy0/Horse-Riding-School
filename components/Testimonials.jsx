import { Facebook, MessageCircle, Share2, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Beth Stein",
    handle: "@beth.stein",
    timeAgo: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "I bought a saddle kit from this academy shop and I was really impressed with the quality. The team was kind, helpful, and delivery was right on time.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Melissa Gilchrist",
    handle: "@melissa.gilchrist",
    timeAgo: "4 months ago",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    text: "This was my third booking and every lesson has been great. My trainer is patient, clear, and super motivating. I recommend it to all beginners.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Schroeder Patty",
    handle: "@schroeder.patty",
    timeAgo: "6 months ago",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    text: "I was nervous for my first ride but the instructors made me feel safe the whole time. Equipment was clean and horses were calm and well trained.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Brenda Morrisey",
    handle: "@brenda.morrisey",
    timeAgo: "4 months ago",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    text: "The kids program is fantastic. Staff are attentive and friendly, and progress reports help a lot. My daughter now looks forward to every class.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Kimberly Fenno",
    handle: "@kimberly.fenno",
    timeAgo: "2 years ago",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    text: "Great facilities and excellent coaching quality. I appreciate how organized everything is from scheduling to on-site support.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Nixon Brooke",
    handle: "@nixon.brooke",
    timeAgo: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    text: "I enrolled for confidence riding sessions and the improvement was visible in just a few weeks. Excellent communication from the whole team.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Blanche Gbadamosi",
    handle: "@blanche.gbadamosi",
    timeAgo: "8 months ago",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
    text: "Loved the weekend workshop. Trainers are very knowledgeable, and the environment feels welcoming even if you are completely new to riding.",
    rating: 5,
    screenshot: "",
  },
  {
    name: "Jamie Quitevis",
    handle: "@jamie.quitevis",
    timeAgo: "3 months ago",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    text: "Simple booking process, transparent pricing, and quality instruction. This is one of the most professional schools in the area.",
    rating: 5,
    screenshot: "",
  },
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="py-20 lg:py-32 relative overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-brand font-bold mb-4"
          >
            <span className="w-6 h-0.5 bg-brand" />
            <span className="uppercase tracking-widest text-sm">
              Social Reviews
            </span>
            <span className="w-6 h-0.5 bg-brand" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-heading"
          >
            What Our Clients <span className="text-brand">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.45,
                delay: index * 0.05,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="bg-white rounded-xl border border-brand/10 shadow-md overflow-hidden"
            >
              <div className="px-4 py-3.5 border-b border-brand/10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-[15px] font-semibold text-slate-800 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate">
                        {testimonial.handle} · {testimonial.timeAgo}
                      </p>
                    </div>
                  </div>
                  <Facebook
                    size={15}
                    className="text-[#1877f2] shrink-0 mt-0.5"
                  />
                </div>
              </div>

              <div className="px-4 pt-3 pb-4 min-h-44">
                <div className="flex space-x-1 mb-3 text-[#32589d]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {testimonial.screenshot ? (
                  <Image
                    src={testimonial.screenshot}
                    alt={`${testimonial.name} review screenshot`}
                    width={900}
                    height={560}
                    unoptimized
                    className="w-full h-auto rounded-lg border border-brand/10"
                  />
                ) : (
                  <p className="text-[15px] leading-7 text-slate-600">
                    {testimonial.text}
                  </p>
                )}
              </div>

              <div className="h-11 border-t border-brand/10 bg-accent/60 px-4 flex items-center justify-center gap-10 text-brand/45">
                <MessageCircle size={15} />
                <Share2 size={15} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* <p className="text-center text-sm text-slate-600 mt-8">
          To use your real screenshots, set each card's
          <span className="font-semibold text-slate-800"> screenshot </span>
          value in
          <span className="font-semibold text-slate-800"> testimonials </span>
          inside this component.
        </p> */}
      </div>
    </section>
  );
}
