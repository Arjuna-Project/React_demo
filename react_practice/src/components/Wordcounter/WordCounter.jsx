import { useState } from "react";
import "./WordCounter.css";

function WordCounter() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const wordCount = text.split(" ").filter(word => word !== "").length;

  return (
    <div className="word-counter">
      <h3>Word Counter</h3>

      <textarea
        rows="4"
        placeholder="Type something..."
        onChange={handleChange}
      ></textarea>

      <p>Words: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
