import Footer from "@/components/Misc/Footer";
import Header from "@/components/Misc/Header";
import { Hero } from "@/components/Sections/Hero";
import { CandyPayProvider } from "@candypay/react-checkout-sdk";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <CandyPayProvider publicApiKey={process.env.NEXT_PUBLIC_CP_API as string}>
      <div className="min-h-screen font-primary w-full flex items-center justify-center py-24 bg-[#0F111E] text-white flex-col">
        <Header />
        <Hero />
        <Footer />
      </div>
    </CandyPayProvider>
  );
};

export default Home;
