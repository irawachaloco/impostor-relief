"use client";

import CodeBlock from "@/app/components/CodeBlock";
import React from "react";
import Demo from "./Demo";

const HEADING_TEXT = `Note Manager`;

const CONTENT_TEXT_1 = `A Note Manager App is a very common example on React code interviews, let's try our own simple example.`;

const CONTENT_TEXT_2 = `What follows is a bit extensive, but if you wish to take a look, here is the code I've used for it:`;

const NOTE_MANAGER_CODE = `
"use client";

import React, { useState } from "react";

type Note = {
  content: string;
  id: number;
};

type NoteFormProps = {
  inputValue: string;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NoteForm: React.FC<NoteFormProps> = ({
  inputValue,
  handleOnSubmit,
  handleOnChange,
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Type a note here"
        onChange={handleOnChange}
      />
    </form>
  );
};

type NoteItemProps = {
  note: Note;
  handleOnEdit: (note: Note) => void;
  handleOnDelete: (note: Note) => void;
};

const NoteItem: React.FC<NoteItemProps> = ({
  note,
  handleOnEdit,
  handleOnDelete,
}) => {
  return (
    <li>
      <span>{note.content}</span>
      <div>
        <button
          onClick={() => handleOnEdit(note)}
        >
          Edit
        </button>
        <button
          onClick={() => handleOnDelete(note)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

type NotesTableProps = {
  noteList: Note[];
  handleOnEdit: (note: Note) => void;
  handleOnDelete: (note: Note) => void;
};

const NotesTable: React.FC<NotesTableProps> = ({
  noteList,
  handleOnEdit,
  handleOnDelete,
}) => {
  return (
    <>
      <h2>Your notes:</h2>
      <ul>
        {noteList.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handleOnDelete={handleOnDelete}
            handleOnEdit={handleOnEdit}
          />
        ))}
      </ul>
    </>
  );
};

const NoteManager: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

  const addNewNote = (note: Note) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === "") return;

    if (noteToEdit) {
      setNotes(
        notes.map((note) =>
          noteToEdit.id === note.id ? { ...note, content: inputValue } : note
        )
      );
      setNoteToEdit(null);
    } else {
      addNewNote({
        id: Date.now(),
        content: inputValue,
      });
    }
    setInputValue("");
  };

  const handleOnDelete = (noteToDelete: Note) => {
    const newNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(newNotes);
  };

  const handleOnEdit = (noteToEdit: Note) => {
    setNoteToEdit(noteToEdit);
    setInputValue(noteToEdit.content);
  };

  return (
    <div>
      <NoteForm
        inputValue={inputValue}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <div>
        <NotesTable
          noteList={notes}
          handleOnEdit={handleOnEdit}
          handleOnDelete={handleOnDelete}
        />
      </div>
    </div>
  );
};

export default NoteManager;
`.trim();

const NoteManagerChapter = () => {
  return (
    <div className="max-w-screen-xl">
      <section className="pb-6">
        <h2 className="text-[#686868] text-xl font-semibold mb-4">
          {HEADING_TEXT}
        </h2>

        <div className="max-w-2xl">
          <div className="pb-4">
            <p>{CONTENT_TEXT_1}</p>
          </div>

          <Demo />

          <div className="pb-4">
            <p>{CONTENT_TEXT_2}</p>
          </div>
        </div>

        <div className="max-w-2xl pb-6">
          <CodeBlock language="tsx" code={NOTE_MANAGER_CODE} />
        </div>
      </section>
    </div>
  );
};

export default NoteManagerChapter;
