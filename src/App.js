import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </Router>
  );
}

export default App;
