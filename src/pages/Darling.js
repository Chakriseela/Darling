import React from "react";
import "./Darling.css"; // Move styles to a CSS file

const Darling = () => {
  return (
    <div className="confession-container">
      <div className="confession" id="confession"></div>
      <button onClick={() => document.getElementById("hiddenMessage").style.display = "block"}>
        Tap for a Surprise 💖
      </button>
      <div className="hidden-message" id="hiddenMessage">
        Ishika, you are the most special person in my life! 💞👑
      </div>
      <button className="next-page-btn" onClick={() => window.location.href = "/love-letter"}>
        Next Page ➡️
      </button>
    </div>
  );
};

export default Darling;
