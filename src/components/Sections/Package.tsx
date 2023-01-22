import { IPackage } from "@/typings/package";
import { FC } from "react";
import { CheckoutBtn } from "../Misc/Checkout";

const PackageSection: FC<
  IPackage & {
    package_uid: string;
  }
> = ({ package_name, price, image, package_uid, is_demo }) => {
  return (
    <div className="flex flex-col text-white gap-6 items-center border w-full border-neutral-500 rounded-md px-12 mt-20 py-10 max-w-5xl">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg">{package_name}</p>

        <CheckoutBtn
          {...{ package_name, price, image, package_uid, is_demo }}
        />
      </div>
    </div>
  );
};

export { PackageSection };
