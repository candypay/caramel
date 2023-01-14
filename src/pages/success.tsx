import { InstallElement } from "@/components/Elements/Install";
import { withSuccess } from "@/middlewares/withSuccess";
import { ISuccessPageProps } from "@/typings/props";
import type { GetServerSideProps, NextPage } from "next";

const Success: NextPage<ISuccessPageProps> = ({ installation_url }) => {
  console.log(installation_url);

  return (
    <div className="min-h-screen w-full bg-brand-primary flex flex-col items-center justify-center text-white gap-3">
      <p>To install the package, run the following command in your terminal:</p>
      <InstallElement {...{ installation_url }} />
    </div>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async (context) =>
  withSuccess(context);
