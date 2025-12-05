// app/layout.tsx

import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "Atithi Homestay Guwahati — Luxury Rooms & Premium Hospitality",
  description:
    "Experience warm hospitality at Atithi Homestay Guwahati. Enjoy luxury rooms, modern amenities, spacious accommodation and a homely environment — perfect for families, couples and business travellers.",
  keywords:
    "Atithi Homestay Guwahati, homestay in Guwahati, luxury rooms Guwahati, premium homestay Assam, Guwahati accommodation, family homestay Guwahati, business stay Guwahati, guest house Guwahati",

  alternates: {
    canonical: "https://atithihome.com", // 
  },

  openGraph: {
    title: "Atithi Homestay Guwahati — Luxury Rooms",
    description:
      "Premium hospitality, luxury rooms & homely environment in Guwahati.",
    url: "https://atithihome.com/",
    siteName: "Atithi Homestay Guwahati",
    images: [
      {
        url: "/assets/images/home-img1.jpg", // replace with your banner
      },
    ],
  },

  icons: {
    icon: "/favicon.png", // <-- yaha aap favicon file dal diya
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* HEADER FIXED */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-16">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
