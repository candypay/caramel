import { useEffect, useState } from "react";

const useClipboard = (text: string) => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
  };

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  return { onCopy, hasCopied };
};

export { useClipboard };
