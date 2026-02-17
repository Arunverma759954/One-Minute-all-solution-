import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Health Tips | Atithi Home Guwahati",
  description:
    "Read blogs and health tips from Atithi Home Guwahati. Find helpful information for medical stays near Pratiksha Hospital, VIP Road, and Barbari.",
  alternates: {
    canonical: "https://www.atithihome.com/blog",
  },
};

const posts = [
  {
    slug: "best-hotel-near-pratiksha-hospital-guwahati",
    title: "Best Hotel near Pratiksha Hospital Guwahati for Comfortable & Affordable Stay",
    date: "16 Feb 2026",
    excerpt:
      "Planning a medical trip to Pratiksha Hospital? Discover why Atithi Home is the best budget-friendly stay just a few minutes away.",
    image: "/assets/img6.jpeg",
  },
];

export default function BlogListPage() {
  return (
    <>
      {/* Blog hero like reference image */}
      <section className="relative h-40 md:h-52 lg:h-60 bg-[#7b1230] text-white pt-20">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/assets/banner/b3.jpg"
            alt="Blog background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#7b1230]/85" />

        <div className="relative max-w-6xl mx-auto h-full flex items-center justify-between px-4 md:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Blog</h1>
            <p className="mt-1 text-sm text-gray-100">
              Home <span className="mx-1">/</span> <span className="font-semibold">Blog</span>
            </p>
          </div>

          <div className="hidden md:block relative h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden border-4 border-white/40">
            <Image
              src="/assets/a2.jpg"
              alt="Doctor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <main className="bg-gray-50 min-h-screen pt-12 pb-24">
        <section className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base tracking-[0.25em] uppercase text-[#1E3A8A] font-semibold">
            News & Health Tips
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Blogs from Atithi Home Guwahati
          </h1>
          <div className="mt-3 w-24 h-1.5 bg-[#1E3A8A] mx-auto rounded-full" />
        </div>

        {/* Blog cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-52 md:h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <p className="text-sm text-gray-500 mb-2">Date : {post.date}</p>
                <h2 className="text-lg md:text-xl font-semibold text-[#1E3A8A] mb-3 leading-snug group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="mt-[-50px] inline-flex items-center gap-1 text-sm font-semibold text-[#1E3A8A] group-hover:text-[#10275c]">
                  Read More
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}
