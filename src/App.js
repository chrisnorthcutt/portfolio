import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./pages/About.js";
import Experiments from "./pages/Experiments.js";

import Resume from "./pages/Resume.js";
import Work from "./pages/Work.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  React.useEffect(() => {
    document
      .getElementsByTagName("body")[0]
      .classList.add("dark", "bg-gray-900");
  });
  return (
    <Router>
      <div className={"px-8"} style={{ maxWidth: 960, margin: "0 auto" }}>
        <Header />
        <Switch>
          <Route path="/" exact component={Work} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/experiments" component={Experiments} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
