import React from "react";
import ReactDOM from "react-dom";

import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <Course />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
