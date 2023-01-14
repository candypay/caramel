import { Hero } from "@/components/Sections/Hero";
import { PackageSection } from "@/components/Sections/Package";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center py-24 bg-[#10100E] text-white flex-col">
      {/* {packages.map((pkg, index) => (
        <CheckoutBtn key={index} {...pkg} />
      ))} */}
      <Hero />

      <PackageSection />
    </div>
  );
};

export default Home;
