import { InstallElement } from "@/components/Elements/Install";
import { NPMElement } from "@/components/Elements/NPM";
import Select from "@/components/Elements/Select";
import Header from "@/components/Misc/Header";
import { ErrorComponent } from "@/components/Sections/Error";
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
        {isExpired && <ErrorComponent type="expired" />}
        {isInvalid && <ErrorComponent type="invalid" />}
        {!isExpired && !isInvalid && (
          <>
            <Image src="/assets/check.svg" width={50} height={50} alt="check" />

            <p className="font-secondary text-2xl">Successfully Purchased</p>
            <div className="flex flex-col gap-4 mt-4">
              <p className="font-primary text-left w-full max-w-xl">
                1: First, add this to your{" "}
                <span className="text-purple-300">.npmrc</span> file:
              </p>

              <NPMElement {...{ token }} />
              <div className="flex justify-between items-center w-full max-w-3xl">
                <p>
                  2: To install the package, run the following command in your
                  terminal:
                </p>

                <Select {...{ tool, setTool }} />
              </div>

              <InstallElement {...{ installation_url, tool }} />
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
};

export default Paid;

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSuccess(context);
