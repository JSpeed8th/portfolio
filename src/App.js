import React, { Component } from "react";
import "./App.css";
import Home from "./home/home";
import About from "./about/about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

class App extends Component {
  collapse;
  collapseHandler = () => {
    console.log(!this.collapse);
  };
  render() {
    this.collapse = false;

    return (
      <div className="App">
        {/* <Home collapseListener={this.collapseHandler} /> */}
        <About collapseListener={this.collapseHandler} />
        <Projects collapseListener={this.collapseHandler} />
        <Contact collapseListener={this.collapseHandler} />
      </div>
    );
  }
}

export default App;
