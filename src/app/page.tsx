import { About3 } from "@/components/About";
import { Causes3 } from "@/components/Causes";
import { Cta3 } from "@/components/Cta";
import { Event3 } from "@/components/Event";
// import { Feature2 } from "@/components/Feature";
import { HeroSlider3 } from "@/components/HeroSlider";
// import { News3 } from "@/components/News";
import { Promo2 } from "@/components/Promo";
import DanboxLayout from "@/layout/DanboxLayout";
import { Testimonial2 } from "@/components/Testimonial";
import { generateSeo } from "@/lib/Seo";
import { Metadata } from "next";

export const generateMetadata = (): Metadata =>
  generateSeo({
    title: "Scrap Dealers Chennai | Scrap Buyers Chennai - Best Prices",
    description: "Top scrap dealers in Chennai buying metal scrap electronic scrap old scrap. Call +91 76395 82802 today for instant pickup best rates",
    path: "/",
    images: '/assets/img/waste-images/metal-waste/img-1.jpg',
  });


const Home3 = () => {
  return (
    <DanboxLayout>

      <HeroSlider3 />
      <Promo2 />
      <About3 />
      <Causes3 />
      <Cta3 />
      <Event3 />
      {/* <Feature2 /> */}
      {/* <Cta4 /> */}
      <Testimonial2 />

    </DanboxLayout>
  );
};

export default Home3;
