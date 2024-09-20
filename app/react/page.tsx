import React from "react";
import { LinksGrid } from "../components/LinksGrid";

const ReactSection = () => {
  const exercises = [
    {
      id: 1,
      text: "Counter",
      url: "react/counter",
    },
  ];
  return (
    <div>
      <h1>ReactSection</h1>
      <p>A brief review of common knowledge in the React world.</p>
      <LinksGrid links={exercises} />
    </div>
  );
};

export default ReactSection;
