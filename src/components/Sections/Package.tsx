import { IPackage } from "@/typings/package";
import { FC } from "react";
import { genSession } from "@/utils/helpers/genSess";
import { useCheckout } from "@candypay/react-checkout-sdk";
import Link from "next/link";

const PackageSection: FC<
  IPackage & {
    package_uid: string;
  }
> = ({ package_name, price, image, package_uid, is_demo }) => {
  const genSess = async () => {
    const res = await genSession({
      package_name,
      price,
      image,
      is_demo,
      package_uid,
    });

    return res;
  };

  const { mutate, isLoading } = useCheckout(genSess);
  return (
    <>
    <section className="text-gray-600 body-font border-b border-gray-800">
    <div className="container max-w-5xl w-full pb-16 mx-auto flex py-12 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font font-medium text-3xl text-gray-100">Try buying a demo package</h1>
        <p className="leading-relaxed mt-4 text-gray-400">Buy this demo SDK by paying in SOL, USDC, BONK, etc. to get a unique download link for this package!</p>
      </div>
      <div className="lg:flex-grow md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full mt-10 md:mt-0">
        <div className="text-gray-900 text-lg font-semibold title-font mb-5">@candypay/sdk -<span>
        <Link passHref href="/docs" className="px-2">SDK Docs</Link>
        </span>
        </div>
        <button className="text-white bg-[#5344FF] border-0 py-2 px-8 focus:outline-none hover:brightness-90 rounded text-lg" onClick={mutate}>
        {isLoading ? (
        <div className="h-2 w-2 bg-neutral-100 rounded-full animate-ping"></div>
      ) : (
        `Buy for $${price}`
      )}
        </button>
      </div>
    </div>
  </section>
  </>
  );
};

export { PackageSection };
