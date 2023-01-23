import { CandyPay } from "@candypay/checkout-sdk";

const sdk = new CandyPay({
  api_keys: {
    public_api_key: process.env.NEXT_PUBLIC_CANDYPAY_API_KEY as string,
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY as string,
  },
  network: process.env[`NODE_ENV`] === "development" ? "devnet" : "mainnet", // use 'mainnet' for prod and 'devnet' for dev environment
  config: {
    collect_shipping_address: false,
    redirect_with_session_id: true,
  },
});

export { sdk };
