import React from "react";
import Main from "./components/Main.js";
import History from './components/History.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path ='/history' component={History}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
