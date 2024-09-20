import React, { FC } from "react";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { lioshi } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  language: string;
  code: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div className="flex">
      <div className="shadow-md rounded rounded-lg my-4 overflow-hidden">
        <SyntaxHighlighter language={language} style={lioshi}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
