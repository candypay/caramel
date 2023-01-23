import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full mx-auto flex flex-wrap p-5 py-6 flex-row md:flex-row items-center bg-[#0F111E] border-b border-gray-400 top-0 fixed py-3 justify-center">
      <div className="flex max-w-5xl justify-between w-full">
        <span><Link passHref href="/" className="px-2">CandyPay</Link></span>
        <span>
        <Link passHref href="https://github.com/candypay/solana-paid-packages" rel="noopener noreferrer" target="_blank" className="px-6">Docs</Link>
        <Link passHref href="#buy" className="px-8 py-2 bg-[#5344FF] rounded-md h-10 hover:brightness-90">Try now</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
