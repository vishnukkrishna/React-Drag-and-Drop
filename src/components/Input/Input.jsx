import React, { useState } from "react";
import "./Input.css";

export const Input = ({ onSubmit }) => {
  const [input, setinput] = useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);
    setinput("");
  };

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};
