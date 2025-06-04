import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const MODAL_CODE = `
type ModalProps = {
  hidden?: boolean;
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ hidden = true, handleClose }) => {
  return (
    <div
      className={\`\${
        hidden ? "hidden" : ""
      } fixed top-0 left-0 w-full h-full flex items-center\`}
    >
      <div className="modal-overlay fixed inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="modal-content bg-white w-96 mx-auto p-6 rounded-lg relative">
        {/* ...modal content */}
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
`.trim();

const USING_MODAL_CODE = `
// ...rest of the code
const [isOpen, setIsOpen] = useState<boolean>(false);

const handleOnClick = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsOpen(!isOpen);
};

return (
    <>
      <button className="mr-2 rounded-sm border border-1 border-blue-400 bg-blue-200 hover:bg-blue-100 p-2" onClick={handleOnClick}>
        Open Modal
      </button>
      <Modal hidden={!isOpen} handleClose={() => setIsOpen(!isOpen)} />
    </>
)
`.trim();

const ModalChapter = () => {
  return (
    <div>
      <section>
        <h1></h1>
        <h1 className="text-[#686868] text-lg font-semibold mb-6">
          {`A modal`}
        </h1>
        <div className="max-w-2xl">
          <p>{`From time to time, you'll face that infamous piece of UI: the modal. A blocking prompt that interrupts everything, demanding user action—whether you’re ready or not. Here’s a simple example of how to create a modal window in React. In reality, a production-ready modal would be far more robust (and most likely handled by a third-party library because, let’s be real, who enjoys building these things from scratch?). But for now, this is a basic exercise in crafting your own baby modal.`}</p>
          <CodeBlock language="tsx" code={MODAL_CODE} />
          <p>And then, you can use like this:</p>
          <CodeBlock language="tsx" code={USING_MODAL_CODE} />
          <p>And this is how it works:</p>
        </div>
      </section>
      <Demo />
    </div>
  );
};

export default ModalChapter;
