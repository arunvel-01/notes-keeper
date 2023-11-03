import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

// Functional component for displaying a single note
function Note(props) {
  // Function to handle the click event when the delete button is clicked
  function handleClick() {
    props.onDelete(props.id);
  }

  // Render the note with title, content, and a delete button
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

// Export the Note component
export default Note;
