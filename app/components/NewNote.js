"use client";
import React from "react";

const NewNote = ({ title, desc, submitHandler, setTitle, setDesc, display, setShowForm, showForm}) => {
    const isVisible = () => {
       setShowForm(false)
    }
 
  return (
    <div className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${showForm? "": "hidden"}`}>
        <form onSubmit={(e) => {submitHandler(e)}} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="w-2/5 px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            placeholder="Description"
            className="w-2/5 px-2 py-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="py-1 w-16 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={isVisible}
            >
            Save
          </button>
        </form>
      
      
     
    </div>
  );
};

export default NewNote;
