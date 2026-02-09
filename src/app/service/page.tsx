
// import { Cta1 } from "@/components/Cta";
// import { CausesTab } from "@/components/Causes";
import PageBanner from "@/components/PageBanner";
// import { Service1 } from "@/components/Service";
import ServiceContent from "@/components/ServiceContent";
import DanboxLayout from "@/layout/DanboxLayout";
import { generateSeo } from "@/lib/Seo";
import { Metadata } from "next";


export const generateMetadata = (): Metadata =>
  generateSeo({
    title: "Scrap Collection Services Chennai | Scrap Buyers Near Me",
    description: "Professional scrap collection near me in Chennai for metal scrap electronic scrap battery scrap with instant pickup service",
    path: "/service",
    images: '/assets/img/waste-images/metal-waste/img-1.jpg',
  });

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Our Services" />
       <ServiceContent/>
    </DanboxLayout>
  );
};

export default CausesPage;
