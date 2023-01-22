import { IPackage } from "@/typings/package";
import { genSession } from "@/utils/helpers/genSess";
import { useCheckout } from "@candypay/react-checkout-sdk";
import { FC } from "react";

const CheckoutBtn: FC<
  IPackage & {
    package_uid: string;
  }
> = ({ package_name, price, image, is_demo, package_uid }) => {
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
    <button
      className="text-white rounded-md w-32 h-10 flex justify-center items-center bg-[#191919] font-medium hover:bg-[#2F2F2F] transition-colors duration-100"
      onClick={mutate}
    >
      {isLoading ? (
        <div className="h-2 w-2 bg-neutral-100 rounded-full animate-ping"></div>
      ) : (
        `Buy for $${price}`
      )}
    </button>
  );
};

export { CheckoutBtn };
