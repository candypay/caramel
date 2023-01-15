import { Hero } from "@/components/Sections/Hero";
import { PackageSection } from "@/components/Sections/Package";
import { packages } from "@/lib/constants/packages";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center py-24 bg-[#10100E] text-white flex-col">
      <Hero />

      {/* <MarkdownViewer markdownValue={docs} /> */}

      {Object.keys(packages).map((key) => {
        const metadata = packages[key];
        return <PackageSection key={key} {...metadata} package_uid={key} />;
      })}
    </div>
  );
};

export default Home;
