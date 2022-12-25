import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // let name = "<b> Rohi </b>";
  const [mode, setMode] = useState("light");
  const [toggleMode, setToggleMode] = useState(false);
  const [message, setMessage] = useState(null);

  const handleToggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042734";
      document.body.style.color = "white";
      showAlertMessage("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils Amazing!";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now!";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlertMessage("Dark Mode has been disabled", "success");
    }
  };
  // Handle Toggle Red Mode
  const handleToggleRedMode = () => {
    if (mode != "red") {
      setMode("red");
      document.body.style.backgroundColor = "pink";
      document.body.style.color = "white";
      showAlertMessage("Red Mode has been enabled", "danger");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlertMessage("Red Mode has been disabled", "danger  ");
    }
  };
  const showAlertMessage = (message, type) => {
    let newMessage = {
      msg: message,
      type: type,
    };
    setMessage(newMessage);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
    // clearTim
  };
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          handleToggleMode={handleToggleMode}
          handleToggleRedMode={handleToggleRedMode}
          aboutText="About Us"
          title="TextUtils"
        />
        <Alert alertMessage="This is an alert" message={message} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlertMessage}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
