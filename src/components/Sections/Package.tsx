import { IPackage } from "@/typings/package";
import { FC } from "react";
import { CheckoutBtn } from "../Misc/Checkout";

const PackageSection: FC<
  IPackage & {
    package_uid: string;
  }
> = ({ package_name, price, image, package_uid, is_demo }) => {
  return (
    <div className="mx-48 w-full flex justify-center">
      <div className="flex flex-col gap-6 items-center border w-full border-neutral-900 rounded-md px-12 mt-20 py-10 mx-48">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg">{package_name}</p>

          <CheckoutBtn
            {...{ package_name, price, image, package_uid, is_demo }}
          />
        </div>
      </div>
    </div>
  );
};

export { PackageSection };
