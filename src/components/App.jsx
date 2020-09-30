import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [headingText, setHeadingText] = useState("");
  let [isMousedOver, setIsMoused] = useState(false);

  function handleChange(event) {
    return setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);

    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMoused(true);
  }

  function handleMouseOut() {
    setIsMoused(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ background: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
