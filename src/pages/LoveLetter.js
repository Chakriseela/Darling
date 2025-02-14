import React from "react";
import "./LoveLetter.css"; // Move styles to a CSS file

const LoveLetter = () => {
  return (
    <div className="love-letter">
      <h1>Dear Ishika,</h1>
      <p>Your smile brightens my days... Will you be mine forever? ❤️</p>
      <button onClick={() => window.location.href = "/darling"}>⬅️ Back</button>
    </div>
  );
};

export default LoveLetter;
