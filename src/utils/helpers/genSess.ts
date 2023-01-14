import { IPackage } from "@/typings/package";
import axios, { AxiosRequestConfig } from "axios";

const genSession = async ({
  package_name,
  image,
  price,
  package_uid,
}: IPackage & {
  package_uid: string;
}) => {
  const options: AxiosRequestConfig = {
    url: "/api/session/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      package_uid,
      package_name,
      price,
      image,
    },
  };
  const res = await axios(options);

  return res.data.session_id;
};

export { genSession };
