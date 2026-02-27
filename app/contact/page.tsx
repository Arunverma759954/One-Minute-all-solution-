import Contactsection from "./ContactSection";

export const metadata = {
  title:
    "Book an Appointment | One Mins Cleaning Solutions Delhi NCR — Contact Us",
  description:
    "Schedule your professional cleaning service in Delhi NCR. Get in touch with OMCAS for residential deep cleaning, office maintenance, and sanitization enquiries.",
  keywords:
    "contact One Mins Cleaning Solutions, book cleaning Delhi NCR, cleaning company contact, OMCAS phone number, cleaning service booking Delhi NCR, professional cleaners Delhi NCR",

  alternates: {
    canonical: "https://www.atithihome.com/contact",
  },

  // ⭐ Short OG image
  openGraph: {
    images: "/assets/cl.jpg",
  },

  // ⭐ Twitter card image
  twitter: {
    card: "summary_large_image",
    images: "/assets/cl.jpg",
  },
};

export default function Page() {
  return <Contactsection />;
}
