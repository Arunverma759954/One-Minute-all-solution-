import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaChevronRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cleaning Insights & Tips | One Mins Cleaning Solutions Guwahati",
  description:
    "Expert cleaning tips, deep sanitization guides, and professional advice for maintaining a healthy home and office in Guwahati by OMCAS.",
  alternates: {
    canonical: "https://www.atithihome.com/blog",
  },
};

const posts = [
  {
    slug: "ultimate-guide-deep-cleaning-guwahati",
    title: "The Ultimate Guide to Deep Cleaning Your Home in Guwahati",
    date: "24 Feb 2026",
    excerpt:
      "OMCAS experts explain why humidity in Guwahati can lead to mold and dust accumulation. Learn the professional techniques to keep your home pristine year-round.",
    image: "/assets/cl.jpg",
    category: "Home Care"
  },
  {
    slug: "sofa-sanitization-essential-healthy-home",
    title: "Why Sofa Sanitization is Essential for a Healthy Home",
    date: "20 Feb 2026",
    excerpt:
      "Your sofa hides more than just crumbs. Discover why professional steam cleaning is vital for removing deep-seated allergens and germs.",
    image: "/assets/a1.jpg",
    category: "Sanitization"
  },
  {
    slug: "5-reasons-hire-professional-kitchen-cleaners",
    title: "5 Reasons to Hire Professional Kitchen Cleaners",
    date: "15 Feb 2026",
    excerpt:
      "Grease and grime in hard-to-reach places can be a health hazard. See how industrial-grade cleaning transforms your cooking space.",
    image: "/assets/img1.jpeg",
    category: "Specialized"
  },
];

export default function BlogListPage() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ====================== BANNER ====================== */}
      <section className="relative w-full h-[50vh] flex items-center justify-center">
        <Image
          src="/assets/img4.jpeg"
          alt="Cleaning Insights Blog"
          width={1920}
          height={880}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1E5F7C]/70 backdrop-blur-[1px]"></div>
        <div className="absolute z-20 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Cleaning <span className="text-[#2EC3BD]">Insights</span>
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl font-bold opacity-90 max-w-2xl mx-auto">
            "Your Daily Dose of Hygiene, Health & Household Tips"
          </p>
        </div>
      </section>

      <main className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-[#1E5F7C] font-black uppercase tracking-[0.3em] text-sm">Knowledge Hub</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">Latest From Our Experts</h2>
            <div className="w-20 h-1.5 bg-[#2EC3BD] mx-auto mt-6 rounded-full" />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-b-8 border-transparent hover:border-[#1E5F7C]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#2EC3BD] text-[#1E5F7C] font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-bold mb-4">
                    <FaCalendarAlt className="text-[#2EC3BD]" />
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-black text-[#1E5F7C] mb-4 leading-tight group-hover:text-black transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#1E5F7C] font-black uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                    Read Article <FaChevronRight className="text-[#2EC3BD]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-[#1E5F7C] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2EC3BD]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-black text-white">Never Miss a Hygiene Hack</h2>
          <p className="mt-4 text-white/70 text-xl font-bold max-w-2xl mx-auto">Subscribe to our newsletter and get professional cleaning tips delivered straight to your inbox.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2EC3BD] flex-1 font-bold"
            />
            <button className="bg-[#2EC3BD] text-[#1E5F7C] font-black px-10 py-4 rounded-full shadow-xl hover:bg-white transition-all uppercase tracking-widest text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
