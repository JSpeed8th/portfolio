import React, { Component } from "react";
import "./App.css";
import "../Normalize.css";
import Home from "../components/Home/home";
import About from "../components/About/about";
import Projects from "../components/Projects/projects";
import Skills from "../components/Skills/skills";
import ReactFooter from "../components/ReactFooter/ReactFooter";

class App extends Component {
  state = {
    route: 'Home'
  }

  changeRoutingHandler = (routeName) => this.setState({ route: routeName });

  expandPageHandler = (routeName, style) => {
    if (routeName === this.state.route) style.width = '87.5vw'
  }

  render() {
    return (
      <div className="App">
        <Skills
        changeRoutingHandler = {this.changeRoutingHandler}
        expandPageHandler = {this.expandPageHandler}
        route = {this.state.route}
        />
        <Projects
        changeRoutingHandler = {this.changeRoutingHandler}
        expandPageHandler = {this.expandPageHandler}
        route = {this.state.route}
        />
        <About
        changeRoutingHandler = {this.changeRoutingHandler}
        expandPageHandler = {this.expandPageHandler}
        route = {this.state.route}
        />
        <Home
        changeRoutingHandler = {this.changeRoutingHandler}
        route = {this.state.route}
         />
        <ReactFooter />
      </div>
    );
  }
}

export default App;
