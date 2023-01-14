const APP_URL =
  process.env[`NODE_ENV`] === "development"
    ? "http://localhost:3000"
    : "https://solana-paid-packages.vercel.app";

export { APP_URL };
