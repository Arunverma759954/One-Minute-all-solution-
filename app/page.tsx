import BannerSlider from "@/components/home/BannerSlider";
import Intro from "@/components/home/Intro";
import AtithiHomeContent from "@/components/home/AtithiHomeContent";
import HotelFacilities from "@/components/home/HotelFacilities";
import LuxuryIntroSection from "@/components/home/LuxuryIntroSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import RoomsGridSection from "@/components/home/RoomsGridSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <BannerSlider />
      <div className="relative">
        <Intro />
        <AtithiHomeContent />
        <HotelFacilities />
        <LuxuryIntroSection />
        <WhyChooseSection />
        <RoomsGridSection />
        <TestimonialSection />
        <BlogSection />
      </div>
    </main>
  );
}
