
// import { Cta1 } from "@/components/Cta";
// import { CausesTab } from "@/components/Causes";
import PageBanner from "@/components/PageBanner";
// import { Service1 } from "@/components/Service";
import ServiceContent from "@/components/ServiceContent";
import DanboxLayout from "@/layout/DanboxLayout";

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Our Services" />
       <ServiceContent/>
    </DanboxLayout>
  );
};

export default CausesPage;
