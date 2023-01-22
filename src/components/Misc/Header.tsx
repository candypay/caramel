import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full border-b border-[#2E2840] top-0 fixed py-3 flex justify-center">
      <div className="flex max-w-5xl justify-between w-full">
        <span>CandyPay</span>
        <Link passHref href="/docs">Docs</Link>
      </div>
    </div>
  );
};

export default Header;
