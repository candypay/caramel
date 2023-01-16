import axios from "axios";
import { GetServerSidePropsContext } from "next";

const withDocs = async (ctx: GetServerSidePropsContext) => {
  const defaultDocs = await axios.get(
    `https://npm.pkg.github.com/@candypay/sdk`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );

  const md = defaultDocs.data.versions[`1.1.2`].readme;

  return {
    props: {
      docs: md,
    },
  };
};

export { withDocs };
