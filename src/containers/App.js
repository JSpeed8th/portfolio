import React, { Component } from "react";
import "./App.css";
import "../Normalize.css";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/contact/contact";
import ReactFooter from "../components/ReactFooter/ReactFooter";

class App extends Component {
  state = {
    homeCollapsed: true
  }

  collapsedToggleHandler = () => {
    this.setState({
      homeCollapsed: false
    })
  }

  collapsedToggleHandlerTwo = () => {
    this.setState({
      homeCollapsed: true
    })
  }
  render() {
    return (
      <div className="App">
        <Contact
        collapseHandler={this.collapsedToggleHandler}
        expandHandler = {this.collapsedToggleHandlerTwo}
        />
        <Projects
        collapseHandler={this.collapsedToggleHandler}
        expandHandler = {this.collapsedToggleHandlerTwo}
        />
        <About collapseHandler={this.collapsedToggleHandler}
        expandHandler = {this.collapsedToggleHandlerTwo}
        />
        <Home homeCollapsed={this.state.homeCollapsed} />
        <ReactFooter />
      </div>
    );
  }
}

export default App;
