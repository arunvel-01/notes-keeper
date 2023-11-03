import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to manage the array of notes
  const [notes, setNotes] = useState([]);

  // Function to add a new note
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note by its index
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Component for creating a new note */}
      <CreateArea onAdd={addNote} />

      {/* Mapping over the notes array and rendering Note components */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
