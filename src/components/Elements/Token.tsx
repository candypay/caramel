import { useClipboard } from "@/lib/hooks/useClipboard";
import { FC } from "react";
import { BiCheck } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

const TokenElement: FC<{
  token?: string;
}> = ({ token }) => {
  const { onCopy, hasCopied } = useClipboard(token!);
  console.log(token);

  return (
    <div className="flex gap-2 items-center justify-center text-white font-mono border border-[#212121] rounded-md px-6 py-2">
      <p>
        <span className="text-pink-300">NPM_TOKEN:</span>{" "}
        <span className="text-yellow-300">{token}</span>
      </p>

      <div onClick={onCopy} className="cursor-pointer hover:text-neutral-300">
        {hasCopied ? (
          <span className="text-green-300">
            <BiCheck size={20} />
          </span>
        ) : (
          <FiCopy size={20} />
        )}
      </div>
    </div>
  );
};

export { TokenElement };
