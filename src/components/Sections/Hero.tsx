import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="flex justify-between items-center gap-16 max-w-5xl w-full">
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold font-secondary">
          Paid NPM Packages, <br /> integrated with{" "}
          <span className="text-purple-500">CandyPay</span>
        </p>
        <p className="text-neutral-300">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam, <br /> eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
        </p>

        <button className="bg-[#5344FF] w-[80%] py-1 rounded-md text-sm h-9 my-4">
          Try a Demo Paid Package
        </button>
      </div>

      <Image
        src="/assets/hero.svg"
        alt="hero"
        className="w-96 h-96"
        width={500}
        height={500}
      />
    </div>
  );
};

export { Hero };
