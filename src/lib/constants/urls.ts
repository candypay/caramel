const APP_URL =
  process.env[`NODE_ENV`] === "development"
    ? "http://localhost:3000"
    : "https://caramel-solana.vercel.app";

export { APP_URL };
