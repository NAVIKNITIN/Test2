import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

// Importing Components
// 
import Home from "./components/Home";
// 

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
