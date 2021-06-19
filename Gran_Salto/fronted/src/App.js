import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path = "/" exact>
            <Home/>
          </Route>
          <Redirect to = "/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
