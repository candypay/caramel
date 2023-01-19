import { InstallElement } from "@/components/Elements/Install";
import Select from "@/components/Elements/Select";
import { TokenElement } from "@/components/Elements/Token";
import Header from "@/components/Misc/Header";
import { withSuccess } from "@/middlewares/withPackage";
import { installationTool } from "@/typings/installationTool";
import { ISuccessPageProps } from "@/typings/props";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Paid: NextPage<ISuccessPageProps> = ({
  isExpired,
  isInvalid,
  token,
  installation_url,
}) => {
  const [tool, setTool] = useState<installationTool>("pnpm");

  return (
    <div className="h-screen w-full flex bg-[#0F111E] text-white">
      <Header />
      <div
        className="h-[70%] w-full bg-cover bg-no-repeat bg-center flex flex-col items-center py-44 gap-4"
        style={{
          backgroundImage: "url('/assets/bg-pattern.svg')",
        }}
      >
        <Image src="/assets/check.svg" width={50} height={50} alt="check" />

        <p className="font-secondary text-2xl">Successfully Purchased</p>
        <p className="font-primary">
          First, add this to your{" "}
          <span className="text-purple-300">.npmrc</span> file:
        </p>

        <TokenElement {...{ token }} />

        <p>
          To install the package, run the following command in your terminal:
        </p>
        <InstallElement {...{ installation_url, tool }} />
        <Select {...{ tool, setTool }} />
      </div>{" "}
    </div>
  );
};

export default Paid;

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSuccess(context);
