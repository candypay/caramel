import axios from "axios";
import { GetServerSidePropsContext } from "next";

const withDocs = async (ctx: GetServerSidePropsContext) => {
  const registryResponse = await axios.get(
    `https://npm.pkg.github.com/@candypay/sdk`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const latestVersion = registryResponse.data["dist-tags"].latest;
  const md = registryResponse.data.versions[latestVersion].readme;

  return {
    props: {
      docs: md,
    },
  };
};

export { withDocs };
