"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogSection() {
  const blogs = [
    {
      title: "The Ultimate Guide to Deep Cleaning Your Home in Guwahati",
      desc: "Discover professional tips and tricks to keep your living space spotless and healthy with our comprehensive deep cleaning guide.",
      img: "/assets/cl.jpg",
      date: "27 Feb 2026",
      href: "/blog",
    },
    {
      title: "Why Sofa Sanitization is Essential for a Healthy Home",
      desc: "Learn about the hidden dust mites and allergens in your furniture and why professional sanitization is a must for your family.",
      img: "/assets/a1.jpg",
      date: "Coming soon",
      href: "/blog",
    },
    {
      title: "5 Reasons to Hire Professional Kitchen Cleaners",
      desc: "From degreasing to deep sanitization, see why expert kitchen cleaning is vital for food safety and a germ-free environment.",
      img: "/assets/pexels-matilda-wormwood-4099471.jpg",
      date: "Coming soon",
      href: "/blog",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.25em] uppercase text-[#1E5F7C] font-semibold">
            Latest Posts
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our Recent Articles
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-3 h-1 bg-[#2EC3BD] rounded-full mx-auto"
          />
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {blogs.map((blog, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              key={idx}
              className="bg-white shadow-xl rounded-xl overflow-hidden group border border-gray-100"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-[#1E5F7C] font-semibold mb-2">
                  {blog.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#1E5F7C] transition-colors leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.desc}</p>

                <Link
                  href={blog.href}
                  className="text-[#1E5F7C] font-bold group-hover:underline inline-flex items-center gap-1 transition-all"
                >
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
