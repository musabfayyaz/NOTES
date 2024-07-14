"use client";
import axios from "axios";
import React from "react";

const Note = ({note, setNotes }) => {
  const deleteHandler = async (note) => {
     const id = note._id
    await axios.delete(`http://localhost:3001/api/notes/${id}`);
    setNotes((prevNotes) => prevNotes.filter((n) => n._id !== id));

  }
  return (
    <div className="p-6 max-w-[12rem] min-h-[15rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      
        <>
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
          <p className="mb-3 font-normal text-white dark:text-gray-400">
           {note.desc}
          </p>
          <button
          className="py-1 w-16 text-white bg-red-700 rounded-lg"
          onClick={() => {deleteHandler(note)}}
          >
          Delete
        </button>
        </>
      
    </div>
  );
};

export default Note;
