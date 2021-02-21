import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
