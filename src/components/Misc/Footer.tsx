import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-8 w-full text-center">
      <p className="text-center text-neutral-300">
        A product by{" "}
        <Link passHref href="https://twitter.com/candypayfun">
          <span className="font-medium">CandyPay</span>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
