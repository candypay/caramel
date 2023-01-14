import { FC } from "react";

const PackageSection: FC = () => {
  return (
    <div className="mx-48 w-full flex justify-center">
      <div className="flex flex-col gap-6 items-center border w-full border-neutral-900 rounded-md px-12 mt-20 py-10 mx-48">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg">Some weird NPM Package</p>

          <button className="text-white rounded-md px-6 bg-[#191919] font-medium py-2">
            Buy for $5
          </button>
        </div>
      </div>
    </div>
  );
};

export { PackageSection };
