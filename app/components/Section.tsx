import React from "react";

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="rounded-lg border-solid border-[1px] border-gray-300 shadow-md p-4 mt-4 mb-6">
      {children}
    </div>
  );
};

export default Section;
