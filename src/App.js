import React, { useEffect } from "react";
import "./App.css"; // Import the CSS file

function App() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.classList.add("heart");
      document.body.appendChild(heart);
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      setTimeout(() => heart.remove(), 5000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Happy Valentine's Day Ishika Darling ❤️</h1>
      <a href="/Darling.html">
        <button className="heart-btn">Go to Darling Page</button>
      </a>
    </div>
  );
}

export default App;
