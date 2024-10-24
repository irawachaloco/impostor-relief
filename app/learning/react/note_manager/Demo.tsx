import DemoSection from "@/app/components/DemoSection";
import React from "react";
import NoteManager from "./note_manager_app/NoteManager";

const SECTION_CONTENT_1 = `Note Manager App`;

const NoteManagerDemo = () => {
  return (
    <DemoSection>
      <p className="text-lg text-gray-600 font-bold pb-2">
        {SECTION_CONTENT_1}
      </p>
      <NoteManager />
    </DemoSection>
  );
};

export default NoteManagerDemo;
