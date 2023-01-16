import { InstallElement } from "@/components/Elements/Install";
import Select from "@/components/Elements/Select";
import { TokenElement } from "@/components/Elements/Token";
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
  console.log(installation_url);
  console.log(token);

  return (
    <div className="min-h-screen w-full bg-brand-primary font-primary flex flex-col items-center justify-center text-white gap-3">
      {isExpired && <ErrorComponent type={"expired"} />}
      {isInvalid && <ErrorComponent type={"invalid"} />}

      {!isExpired && !isInvalid && (
        <>
          <p>
            To install the package, run the following command in your terminal:
          </p>
          <InstallElement {...{ installation_url, tool }} />
          <Select {...{ tool, setTool }} />
          <TokenElement {...{ token }} />
        </>
      )}
    </div>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSuccess(context);
