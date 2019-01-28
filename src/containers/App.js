import React, { Component } from "react";
import "./App.css";
import "../Normalize.css";
import Home from "../components/home/home";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import ReactFooter from "../components/footer/footer";

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
