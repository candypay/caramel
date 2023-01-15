import "@/styles/globals.css";
import "@fontsource/pt-mono";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <CandyPayProvider publicApiKey={process.env.NEXT_PUBLIC_CP_API}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    // </CandyPayProvider>
  );
}

export default MyApp;
