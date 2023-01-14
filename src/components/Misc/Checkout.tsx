import { IPackage } from "@/typings/package";
import { genSession } from "@/utils/helpers/genSess";
import { useAltCheckout } from "@candypay/react-checkout-sdk";
import { Button } from "@chakra-ui/react";
import { FC } from "react";

const CheckoutBtn: FC<IPackage> = ({ uid, name, price, image }) => {
  const genSess = async () => {
    return await genSession({ uid, name, price, image });
  };

  const { mutate, isLoading } = useAltCheckout(genSess);

  return (
    <Button onClick={mutate} isLoading={isLoading}>
      Checkout
    </Button>
  );
};

export { CheckoutBtn };
