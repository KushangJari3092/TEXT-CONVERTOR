import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./modules/About";
import Textform from "./modules/Textform";

const App = () => {
  const [mode, setMode] = useState('light') //checks dark mode enabled or not

  return (
    <>
      <Router>
        <Navbar title="Kushang" mode={mode} />
        <div className="container">
          <Switch>
            {/* <Route exact path="/" component={Navbar} /> */}
            <Route path="/form">
              <Textform heading="Enter Text" mode={mode} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
