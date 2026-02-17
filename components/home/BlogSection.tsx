import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      title: "Best Hotel near Pratiksha Hospital Guwahati",
      desc: "Know why Atithi Home is the best, comfortable and budget-friendly stay near Pratiksha Hospital Guwahati.",
      img: "/assets/img6.jpeg",
      date: "16 Feb 2026",
      href: "/blog/best-hotel-near-pratiksha-hospital-guwahati",
    },
    {
      title: "Top Attractions Near VIP Road & Barbari",
      desc: "Explore nearby places when you stay at Atithi Home near Pratiksha Hospital and VIP Road.",
      img: "/assets/img7.jpeg",
      date: "Coming soon",
      href: "/blog",
    },
    {
      title: "Tips for a Comfortable Medical Stay in Guwahati",
      desc: "Simple tips to make your hospital visit and stay stress-free for you and your family.",
      img: "/assets/img8.jpeg",
      date: "Coming soon",
      href: "/blog",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="md:text-center mb-12">
          <p className="text-lg tracking-widest text-[#C9A86A] font-semibold">
            LATEST POSTS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Our Recent Articles
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-[#C9A86A] font-semibold mb-2">
                  {blog.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#C9A86A] transition">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.desc}</p>

                <Link
                  href={blog.href}
                  className="text-[#C9A86A] font-semibold group-hover:underline inline-flex items-center gap-1"
                >
                  Read More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
