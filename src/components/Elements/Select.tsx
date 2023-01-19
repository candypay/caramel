import { installationTool } from "@/typings/installationTool";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import cx from "classnames";
import { FC } from "react";

interface IProps {
  tool: installationTool;
  setTool: (tool: installationTool) => void;
}

const Select: FC<IProps> = ({ tool, setTool }) => {
  return (
    <SelectPrimitive.Root
      defaultValue={tool}
      onValueChange={(value) => {
        setTool(value as installationTool);
      }}
    >
      <SelectPrimitive.Trigger asChild aria-label="Tools">
        <button className="flex items-center gap-2 border border-[#212121] py-1 px-4 rounded-md outline-none">
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon>
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.Viewport className="bg-white dark:bg-neutral-900 p-2 rounded-lg shadow-lg">
          <SelectPrimitive.Group>
            {["npm", "yarn", "pnpm"].map((f, i) => (
              <SelectPrimitive.Item
                key={`${f}-${i}`}
                value={f.toLowerCase()}
                className={cx(
                  "relative cursor-pointer flex items-center px-4 py-1 my-1 rounded-md text-sm text-neutral-400 font-medium focus:bg-gray-100 hover:bg-neutral-500",
                  "focus:outline-none select-none",
                  "data-[highlighted]:bg-neutral-800 data-[highlighted]:text-white",
                  "data-[state=checked]:bg-neutral-800 data-[state=checked]:text-white"
                )}
              >
                <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
};

export default Select;
