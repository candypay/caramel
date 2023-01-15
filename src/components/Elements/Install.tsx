import { useClipboard } from "@/lib/hooks/useClipboard";
import { installationTool } from "@/typings/installationTool";
import { FC, useMemo } from "react";
import { BiCheck } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

interface IProps {
  installation_url: string;
  tool: installationTool;
}

const InstallElement: FC<IProps> = ({ tool, installation_url }) => {
  const cmnd = useMemo(() => {
    return `pnpm install ${installation_url}`;
  }, [installation_url]);

  const { onCopy, hasCopied } = useClipboard(cmnd);

  return (
    <div className="flex gap-2 items-center justify-center text-white font-mono border border-[#191919] rounded-md px-6 py-4">
      <p>
        <span className="text-purple-300">{tool}</span>{" "}
        <span className="text-orange-300">install</span>{" "}
        <span className="text-blue-300">
          {installation_url.slice(0, 48) +
            "..." +
            installation_url.slice(-8, -1)}
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

export { InstallElement };
