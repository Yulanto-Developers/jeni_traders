import { CausesTab } from "@/components/WorkContent";
// import { Cta1 } from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import { Event3 } from "@/components/Event";
import { generateSeo } from "@/lib/Seo";
import { Metadata } from "next";


export const generateMetadata = (): Metadata =>
  generateSeo({
    title: "Our Scrap Work Chennai | Scrap Buyers Project Gallery",
    description: "Explore our scrap work in Chennai including metal scrap electronic scrap industrial scrap projects completed successfully",
    path: "/",
    images: '/assets/img/waste-images/metal-waste/img-1.jpg',
  });

const CausesPage = () => {
    return (
        <DanboxLayout>
            <PageBanner pageName="Our Works" />
            <CausesTab />
            <div className="mt-4">
            <Event3 />
            </div>
            {/* <Cta1 /> */}
        </DanboxLayout>
    );
};

export default CausesPage;
