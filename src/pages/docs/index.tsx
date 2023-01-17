declare let document: Document;
import { withDocs } from "@/middlewares/withDocs";
import styles from "@/styles/unset.module.scss";
import Markdown from "marked-react";
import type { GetServerSideProps, NextPage } from "next";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const renderer = {
  code(snippet: string, lang: string) {
    return (
      <SyntaxHighlighter
        language={lang}
        style={nightOwl}
        className="!p-4 rounded-sm"
      >
        {snippet}
      </SyntaxHighlighter>
    );
  },
};

const Index: NextPage<{ docs: string }> = ({ docs }) => {
  return (
    <div
      className={`${styles.unreset} px-64 py-10 text-white bg-brand-primary`}
    >
      <Markdown renderer={renderer}>{docs}</Markdown>
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  withDocs(ctx);
