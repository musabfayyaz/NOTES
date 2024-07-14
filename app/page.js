"use client";
import React from "react";
import Note from "./components/Note";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import NewNote from "./components/NewNote";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const newNotes = await axios.get("http://localhost:3001/api/notes");
    setNotes(newNotes.data);
    setShowForm(false)
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim() !== "") {
      const newNote = {
        title: title,
        desc: desc,
      };
      await axios.post("http://localhost:3001/api/notes", newNote);
      setTitle("");
      setDesc("");
      fetchNotes();
    }
   
  };
  
  const getDragConstraints = () => {
    const margin = 20; // Adjust margin as needed
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate boundaries with margins
    const maxX = windowWidth - margin;
    const maxY = windowHeight - margin;
    
    // Ensure cards stay within the visible viewport area
    return {
      left: margin,
      right: maxX,
      top: margin,
      bottom: maxY
    };
  };


 const addNote = ()=> {
  setShowForm(true)
 }


  return (
    <>
    <button
    className="py-3 w-24 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     onClick={addNote}
    >
    Add Note
  </button>
  
        <NewNote setTitle={setTitle} setDesc={setDesc} title={title} desc={desc} submitHandler={submitHandler} setShowForm={setShowForm} showForm={showForm}/>  

       
        {notes.map((note) => (
          <>
          <motion.div
          drag
          dragConstraints={getDragConstraints()} // Apply the constraints function
          className='max-h-24 p-6 max-w-[12rem] min-h-[15rem]'
        >
        <Note
        title={title}
        desc={desc}
        note={note}
        ShowForm={showForm}
        submitHandler={submitHandler}
        setTitle={setTitle}
        setDesc={setDesc}
        setNotes={setNotes}
       key={note._id}
      />
      </motion.div> 
         
         
          </>
         
        ))}
      
    </>
  );
};

export default page;
