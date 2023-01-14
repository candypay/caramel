import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useEffect, useMemo, useState } from "react";

const Timer: FC = () => {
  const [leftTime, setLeftTime] = useState(20000);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime((prevTime) => prevTime - 1000);
    }, 1000);

    if (leftTime === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [leftTime]);

  const timeToDisplay = useMemo(() => {
    const minutes =
      Math.floor(leftTime / 1000 / 60) < 10
        ? `0${Math.floor(leftTime / 1000 / 60)}`
        : Math.floor(leftTime / 1000 / 60);

    const seconds =
      Math.floor((leftTime / 1000) % 60) < 10
        ? `0${Math.floor((leftTime / 1000) % 60)}`
        : Math.floor((leftTime / 1000) % 60);

    return `${minutes}:${seconds}`;
  }, [leftTime]);

  return (
    <Flex direction="column" gap="2">
      <Text>
        Time left:{" "}
        <motion.span
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          animate={leftTime < 10000 ? "animate" : "initial"}
          variants={{
            initial: {
              y: 0,
            },
            animate: {
              y: 10,
            },
          }}
          exit={{
            opacity: 0,
          }}
          key={leftTime}
        >
          {timeToDisplay}
        </motion.span>
      </Text>

      <Text
        fontFamily="secondary"
        textDecor="underline"
        cursor="pointer"
        _hover={{
          color: "neutral.300",
        }}
        onClick={() => setLeftTime(60000)}
      >
        Reset
      </Text>
    </Flex>
  );
};

export { Timer };
