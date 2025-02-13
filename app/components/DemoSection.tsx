import React from "react";
import Section from "./Section";

type DemoSectionProps = {
  children: React.ReactNode;
};

const DemoSection: React.FC<DemoSectionProps> = ({ children }) => {
  return (
    <Section>
      <div>
        <p>Demo</p>
        {children}
      </div>
    </Section>
  );
};

export default DemoSection;
