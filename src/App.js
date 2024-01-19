import React from "react";
import "./App.css";
import { Markdown } from "./components";

// 'rfce' shortcut for functional component

const App = () => {
  return (
    <div className="App">
      <Markdown />
      {/* // footer */}
    </div>
  );
};

export default App;
