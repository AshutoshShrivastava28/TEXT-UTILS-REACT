import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was selected");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase!", "success");
  };
  const handleDownClick = () => {
    console.log("Uppercase was selected");
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("Handling");
    setText(event.target.value);
  };
  const handleRemoveClick = () => {
    let NewText = text.split(/[ ]+/);
    setText(NewText.join(" "));
    props.showalert("Extra spaces removed", "success");
  };
  const [text, setText] = useState("");
  //   setText("New Text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2"
          onClick={handleRemoveClick}
        >
          Remove Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="my-3"> Your Text Summary</h2>
        <h3 className=" my-3">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </h3>
        {0.008 *
          text.split(/s+/).filter((element) => {
            return element.length !== 0;
          }).length}{" "}
        Minutes are required to read.
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Preview</h2>
        {text.length > 0 ? text : "Nothing to Preview!!!"}
      </div>
    </>
  );
}
