import "./App.css";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <BrowserRouter>
      <Navbar title="Text Converter" />
      <div className="app-main">
        <div className="app-container">
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={
                <FormText
                  showAlert={showAlert}
                  Heading="Transform Your Text"
                />
              }
            />
            <Route
              path="/formtext"
              element={
                <FormText
                  showAlert={showAlert}
                  Heading="Transform Your Text"
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
