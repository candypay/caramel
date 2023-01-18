import "@/styles/globals.css";
import "@fontsource/pt-mono";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <CandyPayProvider publicApiKey={process.env.NEXT_PUBLIC_CP_API}>
    <QueryClientProvider client={queryClient}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </QueryClientProvider>
    // </CandyPayProvider>
  );
}

export default MyApp;
