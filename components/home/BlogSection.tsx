export default function BlogSection() {
  const blogs = [
    {
      title: "Experience Luxury Living at Our Premium Suites",
      desc: "Discover unmatched comfort, modern amenities, and an unforgettable hospitality experience.",
      img: "/assets/img6.jpeg",
      date: "25 Nov 2025",
    },
    {
      title: "Top 5 Attractions Near Our Hotel You Must Visit",
      desc: "Plan your itinerary with ease—explore nearby tourist hotspots just minutes away.",
      img: "/assets/img7.jpeg",
      date: "21 Nov 2025",
    },
    {
      title: "Why Guests Love Our Signature Dining Experience",
      desc: "Taste the finest cuisines crafted by top chefs for a memorable culinary journey.",
      img: "/assets/img8.jpeg",
      date: "18 Nov 2025",
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

                <button className="text-[#C9A86A] font-semibold group-hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
