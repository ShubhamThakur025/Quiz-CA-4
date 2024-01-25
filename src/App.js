import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Welcome from "./components/Welcome";



function App() {
  const [currentPage, changePage] = useState("Welcome")
  const handleSwitchPage = (turn) => {
    switch (turn) {
      case 1:
        changePage("QuestionBox")
        break
      case 2:
        changePage("Result")
        break
      default:
        changePage("Welcome")
        break
    }
  }
  const setPage = (currentPage) => {
    switch (currentPage) {
      case 'Welcome':
        return <Welcome handleClick={() => handleSwitchPage(1)} />
      case 'QuestionBox':
        return <QuestionBox handleClick={() => handleSwitchPage(2)} />
      case 'Result':
        return <Result handleClick={handleSwitchPage} />
      default:
        return <Welcome handleClick={handleSwitchPage} />
    }
  }
  return (
    <div>
      {setPage(currentPage)}
    </div>
  );
}

export default App;