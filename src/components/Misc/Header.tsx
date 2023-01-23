import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <div className="w-full mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center bg-[#0F111E] border-b border-gray-400 top-0 fixed py-3 justify-center">
      <div className="flex max-w-5xl justify-between w-full">
        <Link className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0" href="/" rel="noopener noreferrer">
          <img alt="logo" src="/assets/caramel.png" className="object-cover object-center rounded w-full h-7"/></Link>
        <span>
        <Link passHref href="https://github.com/candypay/solana-paid-packages" rel="noopener noreferrer" target="_blank" className="px-6">Docs</Link>
        <Link passHref href="#buy" className="px-8 py-2 bg-[#5344FF] rounded-md h-10 hover:brightness-90">Try now</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
