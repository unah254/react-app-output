import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}
export default App;
