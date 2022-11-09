import "./App.css";
import About from "./Components/About";
import React, { useState } from "react";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 2500);
  };
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Click on me";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Dont Click on me";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <TextForm
            heading="Enter Your Text"
            mode={mode}
            showalert={showalert}
          /> */}
          {/* <About /> */}
        </div>
        <Switch>
          {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/About">
            <About aboutText={"About"} mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm
              showalert={showalert}
              heading="Try TextUtils - word counter, character counter, remove extra spaces"
              mode={mode}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
