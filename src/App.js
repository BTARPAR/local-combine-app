import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BarChart from './components/BarChart'
import Sphere from './components/Sphere'
import TreeView from './components/Tree-View'
import data from './constant'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/demo-1">Bar Chart</Link>
            </li>
            <li>
              <Link to="/demo-2">Demo - 2</Link>
            </li>
            <li>
              <Link to="/demo-3">Redux Tree</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */ }
        <Switch>
          <Route path="/demo-1">
            <BarChart/>
          </Route>
          <Route path="/demo-2">
            <Sphere/>
          </Route>
          <Route path="/demo-3">

            <TreeView data={ data } width={ 600 } height={ 500 }/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
