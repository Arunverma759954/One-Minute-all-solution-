import Contactsection from "./ContactSection";

export const metadata = {
  title:
    "Atithi Homestay Guwahati — Contact Us & Booking Enquiry",
  description:
    "Get in touch with Atithi Homestay Guwahati. Find our address, phone number and booking form — reach out now to book your stay or ask questions.",
  keywords:
    "Atithi Homestay Guwahati contact, contact Atithi Homestay, Guwahati homestay contact, hotel booking enquiry Assam, guest house contact Guwahati, Atithi Homestay phone, hotel address Guwahati",
  
  // Canonical URL (SEO best practice)
  alternates: {
    canonical: "https://www.atithihome.com/",
  },

  // ⭐ Short OG image
  openGraph: {
    images: "/assets/gallery/s3.jpg",
  },

  // ⭐ Twitter card image
  twitter: {
    card: "summary_large_image",
    images: "/assets/gallery/s3.jpg",
  },
};

export default function Page() {
  return <Contactsection />;
}
