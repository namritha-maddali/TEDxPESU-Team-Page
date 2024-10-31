// App.js
import React, { useState, useRef } from "react";
import "./App.css";
import Landing from "./components/Landing"; // Import the new Landing component
import Team from "./components/Team"; // Import the Team component

function App() {
  return (
    <div className="App">
      <div> <Landing /> </div>
      <div> <Team /> </div>
    </div>
  );
}

export default App;
