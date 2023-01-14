import { motion } from "framer-motion";
import { FC } from "react";
import { BsArrowDown } from "react-icons/bs";

const Hero: FC = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-center text-3xl font-bold font-secondary">
        Paid NPM Packages, <br /> integrated with{" "}
        <span className="text-purple-500">CandyPay</span>
      </p>

      <p className="text-center text-lg font-secondary text-neutral-200">
        Demo of a paid NPM package, integrated with CandyPay below.
      </p>

      <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mt-6 text-neutral-900">
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex items-center"
        >
          <BsArrowDown size={18} />
        </motion.div>
      </div>
    </div>
  );
};

export { Hero };
