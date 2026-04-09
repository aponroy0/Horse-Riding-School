import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop",
    title: "Beginner Riding\nLessons",
    color: "bg-white text-primary",
    btnColor: "bg-[#5A806B] text-white",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598974357851-98166a9d9b5a?q=80&w=400&auto=format&fit=crop",
    title: "Advanced Riding\nTraining",
    color: "bg-primary text-white",
    btnColor: "bg-[#4A6B58] text-white",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
    title: "Horse Care\nWorkshops",
    color: "bg-white text-primary",
    btnColor: "bg-[#5A806B] text-white",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=400&auto=format&fit=crop",
    title: "Memberships Of\nRiding Club",
    color: "bg-white text-primary",
    btnColor: "bg-[#5A806B] text-white",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-primary font-bold mb-4"
          >
            <span className="w-6 h-[2px] bg-primary" />
            <span className="uppercase tracking-widest text-sm">
              Our Services
            </span>
            <span className="w-6 h-[2px] bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#333] mb-6"
          >
            Our Awesome <br /> <span className="text-primary">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-[30px] overflow-hidden shadow-xl flex flex-col items-center text-center group ${service.color}`}
            >
              <div className="w-full h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full border-4 border-[#EFEBE1] flex items-center justify-center shadow-lg">
                  <img
                    src="https://api.iconify.design/mdi:horse-human.svg?color=%23C5A16F"
                    className="w-8 h-8"
                    alt="icon"
                  />
                </div>
              </div>
              <div className="pt-12 pb-8 px-6 flex flex-col items-center flex-grow w-full">
                <h3 className="text-xl font-bold mb-6 whitespace-pre-line">
                  {service.title}
                </h3>
                <div className="mt-auto">
                  <button
                    className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 hover:opacity-90 transition-opacity ${service.btnColor}`}
                  >
                    <span>About Us</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
