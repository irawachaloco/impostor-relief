import React from "react";
import { LinksGrid } from "../components/LinksGrid";

const GallerySection = () => {
  const links = [
    {
      id: 1,
      text: "Text mask",
      url: "./gallery/text_mask",
    },
    {
      id: 2,
      text: "Scripted Strokes",
      url: "./gallery/scripted_strokes",
    },
  ];

  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">
        In this section you can find visual experiments and kind of related
        stuff 🎨
      </h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">Enjoy.</h2>
      <LinksGrid links={links} />
    </div>
  );
};

export default GallerySection;
