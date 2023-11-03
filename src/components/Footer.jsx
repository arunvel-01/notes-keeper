import React from "react";

// Functional component for the footer
function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Render the footer with the current year
  return (
    <footer>
      <p>Copyright &copy; {currentYear}</p>
    </footer>
  );
}

// Export the Footer component
export default Footer;
