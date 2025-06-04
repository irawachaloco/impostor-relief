"use client";

import DemoSection from "@/app/components/DemoSection";
import React, { useState } from "react";
import Modal from "./Modal";

const Demo: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <DemoSection>
        <form onSubmit={handleOnClick}>
          <button className="mr-2 rounded-sm border border-1 border-blue-400 bg-blue-200 hover:bg-blue-100 p-2">
            Open Modal
          </button>
        </form>
        <Modal hidden={!isOpen} handleClose={() => setIsOpen(!isOpen)} />
      </DemoSection>
    </div>
  );
};

export default Demo;
