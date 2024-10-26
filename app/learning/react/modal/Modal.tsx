import React from "react";

const ModalForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputField" className="sr-only">
        Enter something...
      </label>
      <input
        // ref={inputRef}
        id="inputField"
        name="inputField"
        type="text"
        className={`border border-grey-300 rounded-md px-3 py-2 mb-4 w-full`}
        // value={inputValue}
        // onChange={handleInputChange}
        // className={`border ${
        //   isEmpty ? "border-red-300" : "border-grey-300"
        // } rounded-md px-3 py-2 mb-4 w-full`}
        // placeholder="Enter something..."
        // aria-invalid={isEmpty}
        // aria-describedby={isEmpty ? "error-msg" : ""}
      />
      {/* {isEmpty && (
            <p id="error-msg" className="text-red-500 text-xs">
              Input field cannot be empty
            </p>
          )} */}
      <button
        type="submit"
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

type ModalProps = {
  hidden?: boolean;
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ hidden = true, handleClose }) => {
  return (
    <div
      // Using Tailwind
      className={`${
        hidden ? "hidden" : ""
      } fixed top-0 left-0 w-full h-full flex items-center`}

      // style={{
      //   display: hidden ? "none" : "block",
      // }}
      //   className="fixed top-0 left-0 w-full h-full flex items-center"

      //   ** Using CSS **
      //   style={{
      //     display: `${hidden ? "none" : "block"} `,
      //   }}
    >
      <div className="modal-overlay fixed inset-0 bg-black opacity-50 pointer-events-none"></div>
      <div className="modal-content bg-white w-96 mx-auto p-6 rounded-lg relative">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <ModalForm />
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
