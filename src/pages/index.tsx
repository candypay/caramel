import { Hero } from "@/components/Sections/Hero";
import { PackageSection } from "@/components/Sections/Package";
import { packages } from "@/lib/constants/packages";
import { CandyPayProvider } from "@candypay/react-checkout-sdk";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <CandyPayProvider publicApiKey={process.env.NEXT_PUBLIC_CP_API}>
      <div className="min-h-screen font-primary w-full flex items-center py-24 bg-[#10100E] text-white flex-col">
        <Hero />

        {Object.keys(packages).map((key) => {
          const metadata = packages[key];
          return <PackageSection key={key} {...metadata} package_uid={key} />;
        })}
      </div>
    </CandyPayProvider>
  );
};

export default Home;
