import { generateSeo } from "@/lib/Seo";
import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";


export const generateMetadata = (): Metadata =>
  generateSeo({
    title: "Contact Scrap Buyers Chennai | Scrap Dealers Near Me",
    description: "Contact scrap buyers near me in Chennai for instant scrap pickup call +91 76395 82802 today for best scrap prices",
    path: "/contact",
    images: '/assets/img/waste-images/metal-waste/img-1.jpg',
  });


export default function ContactPage() {
  return <ContactClient />;
}


