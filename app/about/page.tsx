import AboutSection from "./AboutSection";

export const metadata = {
  title:
    "Atithi Homestay Guwahati — About Us & Our Hospitality",
  description:
    "Learn about Atithi Homestay in Guwahati: our commitment to clean, comfortable rooms, modern amenities, 24/7 support and warm hospitality — making every stay relaxing and memorable.",
  keywords:
    "Atithi Homestay, Atithi Homestay Guwahati, about Atithi Homestay, Guwahati homestay, Guwahati hotel, comfortable stay Guwahati, premium homestay Assam, hotel hospitality Guwahati",

  alternates: {
    canonical: "https://www.atithihome.com/",
  },

  // ⭐ Short OG image support
  openGraph: {
    images: "/assets/about1.jpg",
  },

  // ⭐ Short Twitter card
  twitter: {
    card: "summary_large_image",
    images: "/assets/about1.jpg",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
