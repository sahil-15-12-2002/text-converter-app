import React, { useState } from "react";

// add functionality in form start
export default function FormText(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to uppercase!", "Successfully");
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // props.showAlert("Text copied!", "Successfully");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to lowercase!", "Successfully");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Remove Extra spaces!", "Successfully");
  };

  const [text, setText] = useState("");
  // add functionality in form  End

  // add functionality of mode  Start
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtntext] = useState("Dark mode");
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Dark mode");
      document.body.style.backgroundColor = "white";
      // props.showAlert("Enable light mode!", "Successfully");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntext("Light mode");
      document.body.style.backgroundColor = "black";
      // props.showAlert("Enable dark mode!", "Successfully");
    }
  };
  // add functionality of mode  End

  return (
    <>
      <button className="btn btn-primary  btn-mode " onClick={toggleStyle}>
        {btntext}
      </button>
      <div className="container" style={myStyle}>
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary  mx-4 my-3"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button className="btn btn-primary  mx-4 my-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary  mx-4 my-3" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-4 my-3" onClick={handleLoClick}>
          Convert to lowerercase
        </button>
        <button
          className="btn btn-primary mx-4 my-3"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" style={myStyle}>
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(/[ ]+/).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
