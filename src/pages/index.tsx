import Footer from "@/components/Misc/Footer";
import Header from "@/components/Misc/Header";
import { Hero } from "@/components/Sections/Hero";
import { PackageSection } from "@/components/Sections/Package";
import { packages } from "@/lib/constants/packages";
import { CandyPayProvider } from "@candypay/react-checkout-sdk";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <CandyPayProvider
      publicApiKey={process.env.NEXT_PUBLIC_CANDYPAY_API_KEY as string}
    >
      <div className="min-h-screen min-h-screen font-primary w-full bg-[#0F111E]">
        <div className="flex items-center justify-center py-24 text-white flex-col">
          <Header />
          <Hero />
        </div>
        <div className="pb-10 w-full flex justify-center" id="buy">
          {Object.keys(packages).map((key) => {
            const { package_name } = packages[key];

            return (
              <PackageSection
                key={package_name}
                {...packages[key]}
                package_uid={key}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </CandyPayProvider>
  );
};

export default Home;
