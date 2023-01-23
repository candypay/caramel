import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <>
      <section className="text-gray-600 body-font border-b border-gray-800">
        <div className="container max-w-5xl w-full pb-16 mx-auto flex py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 mb-12 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-3xl mb-4 font-bold font-secondary text-gray-100">Seamlessly monetize,
              <br /> open-source{" "}
              <span className="text-[#5344FF]">Packages</span>
            </h1>
            <p className="mb-4 leading-relaxed text-gray-400"> Caramel enables open-source developers to monetize their SDKs by selling them in Solana and SPL tokens. It provides a secure and convenient way for devs to earn money and for users to purchase valuable SDKs with the added benefit of using crypto transactions
            </p>
            <div className="flex justify-center">
              <Link className="inline-flex text-white bg-[#5344FF] border-0 py-2 px-40 focus:outline-none hover:brightness-90 rounded-md text-lg" href="#buy">Try now</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-6 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="/assets/programmer.jpeg" />
          </div>
        </div>
      </section>
    </>
  );
};

export { Hero };
