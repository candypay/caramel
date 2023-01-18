import { FC } from "react";

const ErrorComponent: FC<{
  type: "expired" | "invalid";
}> = ({ type }) => {
  return (
    <div>
      {type === "expired" && <p>Sorry, this link has been expired.</p>}
      {type === "invalid" && <p>Sorry, this link is invalid.</p>}
    </div>
  );
};

export { ErrorComponent };
