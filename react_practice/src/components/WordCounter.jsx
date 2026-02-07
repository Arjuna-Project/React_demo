import { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const wordCount = text.split(" ").filter(word => word !== "").length;

  return (
    <div className="container mt-4">
      <h3>Word Counter</h3>

      <textarea
        className="form-control"
        rows="4"
        placeholder="Type something..."
        onChange={handleChange}
      ></textarea>

      <p>Words: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
