import { APP_URL } from "@/lib/constants/urls";
import { sdk } from "@/lib/init/candypay";
import { genJwt } from "@/utils/helpers/gen-jwt";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { package_uid, package_name, price, image } = req.body;

    try {
      const payload = {
        package_id: package_uid,
        exp: Date.now() + 60000 * 10,
      };
      const token = genJwt(payload);

      const response = await sdk.session.create({
        success_url: `${APP_URL}/success?data=${token}`,
        cancel_url: `${APP_URL}/cancel`,
        tokens: ["dust", "bonk", "shdw"],
        items: [
          {
            image,
            name: package_name,
            price,
            quantity: 1,
          },
        ],
      });

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error creating session",
      });
    }
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
