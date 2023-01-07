import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (event) => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "info");
  };
  const handleLoClick = (event) => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lwoercase", "warning");
  };
  const handleInvClick = (event) => {
    console.log("Uppercase was clicked");
    let newText = inverseCase(text);
    setText(newText);
  };
  const inverseCase = (word) => {
    console.log(word);
    let newWord;
    for (let index = 0; index < word.length; index++) {
      const element = word[index];
      let newElement;
      index % 2 === 0
        ? (newElement = element.toUpperCase())
        : element.toLowerCase();
      newWord += newElement;
    }
    return newWord;
  };
  const handleOnChange = (event) => {
    console.log("Text Changed");
    setText(event.target.value);
  };
  const handleCopy = () => {
    let userText = document.getElementById("myBox");
    userText.select();
    navigator.clipboard.writeText(userText.value);
  };
  const [text, setText] = useState("");
  // Wrong way
  // text = "Hello World"
  // Right way
  //   setText("Hello World");
  const handleColor = (mode) => {
    if (mode === "dark") {
      return "white";
    } else if (mode === "red") {
      return "red";
    } else {
      return "black";
    }
  };
  const handleTextareaColor = (mode) => {
    if (mode === "dark") {
      return "#042743";
    } else if (mode === "red") {
      return "magenta";
    } else {
      return "white";
    }
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div
        className="mb-3"
        style={{ color: props.mode === "dark" ? "red" : "blue" }}
      >
        {/* <label htmlFor="myBox" className="form-label">
          Textarea
        </label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: handleTextareaColor(props.mode),
            color: props.mode === "dark" ? "white" : "#042743",
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleInvClick}>
        Convert to iNvErSe cAsE
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy to clipboard
      </button>
      <div className="container my-3">
        <h2>Your text summary</h2>
        {/* {(text.search(/\S/) >= 0 && text.replace(/ +/g, " ").trim().split(" ").length) || 0} words */}
        {/* Simpler logic below */}
        {text.split(/\s/).filter(element => element !== '').length || 0} words
        and {text.length} characters<br></br>
        {Math.max((0.008 * text.length).toPrecision(1), 1)} minute read
      </div>
      <div className="container">
        <h2>Preview</h2>
        {text.length > 0
          ? text
          : "Nothing to preview here"}
      </div>
    </>
  );
}
