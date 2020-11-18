import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./components/pages/NotFoundPage";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>    
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" exact component={News} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/details" exact component={Details} />
          <Route component={NotFoundPage} />
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
