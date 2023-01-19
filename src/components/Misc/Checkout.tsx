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
      className="bg-[#5344FF] w-[80%] py-1 rounded-md text-sm h-9 my-4 hover:brightness-110 flex justify-center items-center"
      onClick={mutate}
    >
      {isLoading ? (
        <div className="h-2 w-2 bg-neutral-100 rounded-full animate-ping"></div>
      ) : (
        `Try a Demo Paid Package`
      )}
    </button>
  );
};

export { CheckoutBtn };
