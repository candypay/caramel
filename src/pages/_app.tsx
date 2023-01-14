import "@/styles/globals.css";
import { theme } from "@/theme";
import { CandyPayProvider } from "@candypay/react-checkout-sdk";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/pt-mono";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CandyPayProvider publicApiKey={process.env.NEXT_PUBLIC_CP_API}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </CandyPayProvider>
  );
}

export default MyApp;
