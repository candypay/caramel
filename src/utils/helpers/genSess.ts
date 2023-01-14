import { IPackage } from "@/typings/package";
import axios, { AxiosRequestConfig } from "axios";

const genSession = async ({ uid, name, image, price }: IPackage) => {
  const options: AxiosRequestConfig = {
    url: "/api/session/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      uid,
      name,
      price,
      image,
    },
  };
  const res = await axios(options);

  return res.data.session_id;
};

export { genSession };
