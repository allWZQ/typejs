import React from "react";
import "./App.css";
// import Hello from "./tsx/hello.tsx";
// import Type from "./tsx/type.tsx";
import CommentApp from "./component/CommentApp";
function App() {
  return (
    <div className="App">
      {/* <Hello name={156156} enthusiasmLevel={3} /> */}
      <CommentApp />
    </div>
  );
}

export default App;
