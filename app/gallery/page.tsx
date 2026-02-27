import GalleryPage from "./GalleryPage";

export const metadata = {
  title:
    "Work Gallery | One Mins Cleaning Solutions Guwahati — Deep Cleaning in Action",
  description:
    "See the OMCAS standard of hygiene. Browse our gallery featuring residential deep cleaning, office sanitization, and specialized cleaning projects across Guwahati.",
  keywords:
    "cleaning gallery Guwahati, OMCAS work photos, deep cleaning before after, professional cleaning images, house cleaning gallery Assam, office sanitization photos",

  alternates: {
    canonical: "https://www.atithihome.com/gallery",
  },

  // ⭐ Short OG image support
  openGraph: {
    images: "/assets/about.jpg",
  },

  // ⭐ Twitter large image card
  twitter: {
    card: "summary_large_image",
    images: "/assets/about.jpg",
  },
};

export default function Page() {
  return <GalleryPage />;
}
