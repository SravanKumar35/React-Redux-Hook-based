import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from './store'

import Posts from "./components/Posts";
import Postform from "./components/Postform";


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React</h3>
        </header>

        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
