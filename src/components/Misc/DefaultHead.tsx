import Head from 'next/head';

interface SEO {
  title?: string;
  description?: string;
  image?: string;
  creator?: string;
  app_name?: string;
  url?: string;
}

export const DefaultHead = (config: SEO) => {
  return (
    <Head>
      <title>{config.title || 'Caramel'}</title>
      <meta name='description' content={config.description || 'Caramel enables open-source developers to seamlessly monetize their SDKs by selling them in Solana and SPL tokens.'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="theme-color" content="white" />
      <link rel='icon' href='https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/custard.png' />

      {config.creator && (
        <meta name='author' content={config.creator} />
      )}

      {config.app_name && (
        <meta name='og:site_name' content={config.app_name} />
      )}

      <meta property='og:type' content={'website'} />
      <meta property='og:url' content={config.url || 'https://caramel.candypay.fun'} />
      <meta property='og:title' content={config.title || 'Caramel'} />
      <meta property='og:description' content={config.description || 'Caramel enables open-source developers to seamlessly monetize their SDKs by selling them in Solana and SPL tokens.'} />
      <meta property='og:image' content={config.image || 'https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/caramel-og.png'} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={config.url || 'https://caramel.candypay.fun'} />
      <meta property='twitter:title' content={config.title || 'Caramel'} />
      <meta property='twitter:description' content={config.description || 'Caramel enables open-source developers to monetize their SDKs by selling them in Solana and SPL tokens.'} />
      <meta property='twitter:image' content={config.image || 'https://shdw-drive.genesysgo.net/BfBZRXtX2ad9dVyJnc6Tbww8egupegtiV2xiwWCBYH1h/caramel-og.png'} />
    </Head>
  );
};