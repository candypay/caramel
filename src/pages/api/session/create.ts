import { sdk } from "@/lib/init/candypay";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { package_uid, package_name, price, image } = req.body;

    try {
      const response = await sdk.session.create({
        success_url: `${process.env.STATIC_URL}/success?package_id=${package_uid}`,
        cancel_url: `${process.env.STATIC_URL}/cancel`,
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
