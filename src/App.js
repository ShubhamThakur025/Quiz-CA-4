import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Welcome from "./components/Welcome";

function App() {
  const [currentPage, changePage] = useState("Welcome");
  const [score, newScore] = useState(0)
  const [mode, changeMode] = useState("Light")

  const handleSwitchPage = (page) => {
    changePage(page)
  };

  const handleScore = (score) => {
    newScore(score)
    changePage("Result")
  }

  const switchMode = () => {
    mode == "Dark" ? changeMode("Light") : changeMode("Dark")
  }
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
      <div className="main" style={{ backgroundColor: mode === "Dark" ? "rgb(40, 40, 40)" : "White" }}>
        <div id="mode" onClick={switchMode}
          style={{
            backgroundColor: mode === "Dark" ? "rgb(40, 40, 40)" : "White",
            color: mode === "Dark" ? "White" : "Black",
            borderColor: mode === "Dark" ? "White" : "black"
          }}
        >{mode}</div>
        {renderPage()}
        <footer style = {{
          backgroundColor: mode === "Dark" ? "rgb(40, 40, 40)" : "white",
          color: mode === "Dark" ? "white" : "rgb(40,40,40)"
        }}>
          <div>Developed & Designed by:</div>
          <div id="creator-name">Shubham Thakur</div>
        </footer>
      </div>
  );
}

export default App;
