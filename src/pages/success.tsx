import { InstallElement } from "@/components/Elements/Install";
import Select from "@/components/Elements/Select";
import { withSuccess } from "@/middlewares/withSuccess";
import { installationTool } from "@/typings/installationTool";
import { ISuccessPageProps } from "@/typings/props";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

const Success: NextPage<ISuccessPageProps> = ({ installation_url }) => {
  const [tool, setTool] = useState<installationTool>("pnpm");

  return (
    <div className="min-h-screen w-full bg-brand-primary flex flex-col items-center justify-center text-white gap-3">
      <p>To install the package, run the following command in your terminal:</p>
      <InstallElement {...{ installation_url, tool }} />
      <Select {...{ tool, setTool }} />
    </div>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSuccess(context);
