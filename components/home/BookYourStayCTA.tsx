"use client";

export default function BookYourStayCTA() {
  return (
    <section className="py-0">
      <div className="w-full">
        <div className="bg-[#1E3A8A] w-full overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-8 md:px-12 lg:px-16 py-10 md:py-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Book Your Stay Today
              </h2>
              <p className="mt-3 md:mt-4 text-white/95 text-base md:text-lg leading-relaxed max-w-xl">
                If you are looking for a dependable Hotel near Pratiksha Hospital Guwahati, a comfortable Hotel near VIP Road Guwahati, or a budget-friendly Hotel in Barbari Guwahati, Atithi Home is ready to welcome you.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/contact"
                className="inline-block bg-white text-[#1E3A8A] font-semibold px-8 py-3.5 rounded-full border border-white/20 shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 min-w-[180px] text-center"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
