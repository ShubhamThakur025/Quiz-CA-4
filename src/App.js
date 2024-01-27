import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Welcome from "./components/Welcome";
import "./media.css";

function App() {
  //for changing pages or components, score and dark mode respectively
  const [currentPage, changePage] = useState("Welcome");
  const [score, newScore] = useState(0)
  const [mode, changeMode] = useState("Dark")

  //to handle the switch bw components
  const handleSwitchPage = (page) => {
    changePage(page)
  };

  //to handle the score increments
  const handleScore = (score) => {
    newScore(score)
    changePage("Result")
  }
  
  //to switch bw modes
  const switchMode = () => {
    mode == "Dark" ? changeMode("Light") : changeMode("Dark")
  }

  //to render the pages
  const renderPage = () => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome handleClick={() => handleSwitchPage("QuestionBox")} />;
      case 'QuestionBox':
        return <QuestionBox handleClick={handleScore} />;
      case 'Result':
        return <Result score={score} handleClick={() => handleSwitchPage("Welcome")} />;
      default:
        return <Welcome handleClick={() => handleSwitchPage("Welcome")} />;
    }
  };

  return (
    <div className="main" style={{
      backgroundColor: mode === "Light" ? "rgb(40, 40, 40)" : "White"
    }}>
      {/* mode button */}
      <div id="mode" onClick={switchMode}
        style={{
          backgroundColor: mode === "Light" ? "rgb(48, 48, 48)" : "White",
          color: mode === "Light" ? "White" : "Black",
          borderColor: mode === "Light" ? "White" : "black"
        }}
      >{mode}</div>
      {renderPage()}
      <footer style={{
        backgroundColor: mode === "Light" ? "rgb(40, 40, 40)" : "white",
        color: mode === "Light" ? "white" : "rgb(40,40,40)"
      }}>
        <div>Developed & Designed by:</div>
        <div id="creator-name">Shubham Thakur</div>
      </footer>
    </div>
  );
}

export default App;
