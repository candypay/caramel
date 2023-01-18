import { InstallElement } from "@/components/Elements/Install";
import { NPMElement } from "@/components/Elements/NPM";
import Select from "@/components/Elements/Select";
import { ErrorComponent } from "@/components/Sections/Error";
import { withSuccess } from "@/middlewares/withPackage";
import { installationTool } from "@/typings/installationTool";
import { ISuccessPageProps } from "@/typings/props";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

const Success: NextPage<ISuccessPageProps> = ({
  isExpired,
  isInvalid,
  token,
  installation_url,
}) => {
  const [tool, setTool] = useState<installationTool>("pnpm");

  return (
    <div className="min-h-screen w-full bg-brand-primary font-primary flex flex-col items-center justify-center text-white gap-3">
      {isExpired && <ErrorComponent type={"expired"} />}
      {isInvalid && <ErrorComponent type={"invalid"} />}

      {!isExpired && !isInvalid && (
        <div className="flex flex-col gap-6 items-center">
          <p>
            To install the package, run the following command in your terminal:
          </p>
          <InstallElement {...{ installation_url, tool }} />
          <Select {...{ tool, setTool }} />
          <p>
            Next, add this to your{" "}
            <span className="text-purple-300">.npmrc</span> file:
          </p>
          <NPMElement {...{ token }} />
        </div>
      )}
    </div>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSuccess(context);
