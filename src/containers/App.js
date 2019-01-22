import React, { Component } from "react";
import "./App.css";
import "../Normalize.css";
import Home from "../components/home/home";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

class App extends Component {
  collapse;
  collapseHandler = () => {
    console.log(!this.collapse);
  };
  render() {
    this.collapse = false;

    return (
      <div className="App">
        <Contact collapseListener={this.collapseHandler} />
        <Projects collapseListener={this.collapseHandler} />
        <About collapseListener={this.collapseHandler} />
        <Home collapseListener={this.collapseHandler} />
      </div>
    );
  }
}

export default App;
