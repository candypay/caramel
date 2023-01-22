import { APP_URL } from "@/lib/constants/urls";
import { useClipboard } from "@/lib/hooks/useClipboard";
import { FC } from "react";
import { BiCheck } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

const NPMElement: FC<{
  token?: string;
}> = ({ token }) => {
  const { onCopy, hasCopied } = useClipboard(
    `@candypay:registry=${APP_URL}/api/tarball
//localhost:3000/:_authToken=${token}`
  );

  const hiddenToken = token?.replace(/./g, "*");

  return (
    <div className="flex gap-2 items-center justify-center text-white font-mono border border-[#212121] rounded-md px-6 py-2 bg-[#151729] max-w-xl w-full">
      <p>
        <span className="text-orange-300">
          {`@candypay:registry=${APP_URL}/api/tarball`} <br />
          {`//localhost:3000/:_authToken=${hiddenToken}`}
        </span>
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

export { NPMElement };
