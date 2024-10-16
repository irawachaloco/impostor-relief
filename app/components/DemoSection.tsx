import React from "react";
import Section from "./Section";

type DemoSectionProps = {
  children: React.ReactNode;
};

const DemoSection: React.FC<DemoSectionProps> = ({ children }) => {
  return (
    <Section>
      <div className="max-w-2xl">
        <p>Demo</p>
        {children}
      </div>
    </Section>
  );
};

export default DemoSection;
