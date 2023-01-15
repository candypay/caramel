import { withDocs } from "@/middlewares/withDocs";
import type { GetServerSideProps, NextPage } from "next";

import { createElement, Fragment, useEffect, useState } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;

function useProcessor(text) {
  const [Content, setContent] = useState(<Fragment></Fragment>);

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then((file) => {
        setContent(file.result);
      });
  }, [text]);

  return Content;
}

const Index: NextPage<{ docs: string }> = ({ docs }) => {
  return <div>{}</div>;
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  withDocs(ctx);
