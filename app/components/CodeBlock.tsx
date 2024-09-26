import React, { FC } from "react";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeBlockProps = {
  language: string;
  code: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div className="flex_">
      <div className="shadow-md rounded rounded-lg my-4 overflow-hidden">
        <SyntaxHighlighter
          language={language}
          style={pojoaque}
          wrapLines={true}
          wrapLongLines
          showLineNumbers
          showInlineLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
