import { CausesTab } from "@/components/WorkContent";
// import { Cta1 } from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import { Event3 } from "@/components/Event";

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
