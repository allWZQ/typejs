import React from "react";
import "./App.css";
// import Hello from "./tsx/hello.tsx";
// import Type from "./tsx/type.tsx";
// import CommentApp from "./component/CommentApp";
// import { Provider } from "mobx-react"; //用于连接react
// import store from "../src/store/index";
// import Home from "../src/pages/home/index";

//Aut
// import Bottom from "./reactAnt/Botton";
import From from "./reactAnt/Form";
function App() {
  return (
    <div className="App">
      {/* <Hello name={156156} enthusiasmLevel={3} /> */}
      {/* <CommentApp /> */}
      {/* 将mobx注入到react */}
      {/* <Provider store={store}>
        <Home />
      </Provider> */}
      {/* <Bottom /> */}
      <From />
    </div>
  );
}

export default App;
