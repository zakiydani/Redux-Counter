import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Pages/Home";
import Car from "./Pages/Car";
import Motor from "./Pages/Motor";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/motor">
            <Motor />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
