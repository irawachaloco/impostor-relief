import React, { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism"; // Nota: aquí era necesario el cjs en vez de esm para evitar un error de sintaxis
// SyntaxError: Unexpected token
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230

// import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-async-light";
// import { funky } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import {
//   funky,
//   vscDarkPlus,
// } from "react-syntax-highlighter/dist/cjs/styles/prism";

// import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
// import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs";

// import {
//   // gruvboxDark,
//   pojoaque,
// } from "react-syntax-highlighter/dist/cjs/styles/prism";

import pojoaque from "react-syntax-highlighter/dist/cjs/styles/prism/pojoaque";

type CodeBlockProps = {
  language: string;
  code: string;
};

const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div className="flex_">
      <div className="shadow-md rounded-lg my-4 overflow-hidden">
        <SyntaxHighlighter
          language={language}
          // style={pojoaque}
          style={pojoaque}
          wrapLines={true}
          wrapLongLines
          aria-label={`Code snippet in ${language}`}
          // showLineNumbers
          // showInlineLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
