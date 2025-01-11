import "./App.css";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App(props) {
  // alert message start
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  // alert message End

  
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="Text Converter" />
      <Alert alert={alert} /> */}
      {/* <FormText
                showAlert={showAlert}
                Heading="Enter the text to analyze below"
              /> */}

      <BrowserRouter>
      <Navbar title="Text Converter" />
      <Alert alert={alert} />
        <Routes>
        <Route
           exact path="/FormText"
            element={
              <FormText
                showAlert={showAlert}
                Heading="Enter the text to analyze below"
              />
            }
          />
          <Route index element={<FormText />} />
          <Route index element={ <Alert alert={alert} />} />

          <Route exact path="/About" element={<About />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
