import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=600&auto=format&fit=crop",
    date: "16 March, 2025",
    author: "Admin",
    comments: "03",
    title: "Horse Riding Tips for\nBeginners",
    delay: 0.1,
    bgColor: "bg-white",
    textColor: "text-[#333]",
    metaColor: "text-gray-500",
    btnBg: "bg-[#5A806B]",
    btnText: "text-white",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664303121652-1977063d4dbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvcnNlc3xlbnwwfDJ8MHx8fDA%3D",
    date: "16 March, 2025",
    author: "Admin",
    comments: "03",
    title: "How to Improve Your\nRiding Skills",
    delay: 0.2,
    bgColor: "bg-[#2D4A3E]",
    textColor: "text-white",
    metaColor: "text-white/70",
    btnBg: "bg-[#5A806B]",
    btnText: "text-white",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop",
    date: "16 March, 2025",
    author: "Admin",
    comments: "03",
    title: "Choosing the Right\nGear for Riding",
    delay: 0.3,
    bgColor: "bg-white",
    textColor: "text-[#333]",
    metaColor: "text-gray-500",
    btnBg: "bg-[#5A806B]",
    btnText: "text-white",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-[#5A806B] font-bold mb-4"
            >
              <span className="w-6 h-[2px] bg-[#5A806B]" />
              <span className="uppercase tracking-widest text-sm">
                News And Blog
              </span>
              <span className="w-6 h-[2px] bg-[#5A806B]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#333]"
            >
              Our Latest <span className="text-[#5A806B]">News</span>
              <br /> And Blogs
            </motion.h2>
          </div>
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-[#2D4A3E] hover:text-white hover:border-[#2D4A3E] transition-all">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#2D4A3E] flex items-center justify-center text-white hover:bg-[#5A806B] transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: blog.delay }}
              className={`${blog.bgColor} rounded-[30px] overflow-hidden shadow-xl flex flex-col group`}
            >
              <div className="relative h-64">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Date Badge */}
                <div
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 ${index === 1 ? "bg-[#1F362D]" : "bg-[#5A806B]"} text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap shadow-lg`}
                >
                  {blog.date}
                </div>
              </div>

              <div className="pt-12 pb-8 px-8 flex flex-col items-center text-center flex-grow">
                <div
                  className={`flex items-center justify-center space-x-4 text-xs font-medium mb-6 ${blog.metaColor}`}
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>By {blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>({blog.comments}) Comments</span>
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold mb-8 whitespace-pre-line ${blog.textColor}`}
                >
                  {blog.title}
                </h3>

                <div className="mt-auto">
                  <button
                    className={`${blog.btnBg} ${blog.btnText} px-6 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 hover:opacity-90 transition-opacity mx-auto`}
                  >
                    <span>Read More</span>
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
