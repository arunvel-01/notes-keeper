import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  // State to track whether the textarea is expanded
  const [isExpanded, setExpanded] = useState(false);

  // State to store the note's title and content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Function to handle changes in the input fields (title and content)
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  // Function to submit the note
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  // Function to expand the textarea
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      {/* Form for creating a note */}
      <form className="create-note">
        {/* Title input field (conditionally rendered when expanded) */}
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        {/* Textarea for the note's content */}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/* Zoomed-in effect on the submit button */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
