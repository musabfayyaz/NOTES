"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import notesAPI from "./services/api";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await notesAPI.get("/notes");
      setNotes(response.data);
      setShowForm(false);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
      const newNote = {
        title: title,
        desc: desc,
      };
      try {
        await notesAPI.post("/notes", newNote);
        setTitle("");
        setDesc("");
        fetchNotes();
      } catch (error) {
        console.error("Error adding note:", error);
      }
    }
  };

  const getDragConstraints = () => {
    const margin = 20; // Adjust margin as needed
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate card dimensions
    const cardWidth = 200; // Adjust based on your card width
    const cardHeight = 200; // Adjust based on your card height

    // Calculate boundaries with margins
    const maxX = windowWidth - margin - cardWidth;
    const maxY = windowHeight - margin - cardHeight;

    // Ensure cards stay within the visible viewport area
    return {
      left: margin,
      right: maxX,
      top: margin,
      bottom: maxY,
    };
  };

  const addNote = () => {
    setShowForm(true);
  };

  return (
    <div className="lock-page">
      <button
        className="py-3 w-24 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={addNote}
      >
        Add Note
      </button>

      <NewNote
        setTitle={setTitle}
        setDesc={setDesc}
        title={title}
        desc={desc}
        submitHandler={submitHandler}
        setShowForm={setShowForm}
        showForm={showForm}
      />

      {notes.map((note) => (
        <motion.div
          key={note._id}
          drag
          dragConstraints={getDragConstraints()}
          className="max-h-24 p-6 max-w-[12rem] min-h-[15rem]"
        >
          <Note
            title={note.title}
            desc={note.desc}
            note={note}
            setNotes={setNotes}
            fetchNotes={fetchNotes}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Page;
