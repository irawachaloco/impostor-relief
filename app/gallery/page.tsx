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
      text: "Painted by Machine",
      url: "./gallery/painted_by_machine",
    },
  ];

  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">Gallery 🎨</h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        Behold! A collection of visual wizardry, CSS sorcery, and code-powered
        illusions. Enjoy the ride!
      </h2>
      <LinksGrid links={links} />
    </div>
  );
};

export default GallerySection;
