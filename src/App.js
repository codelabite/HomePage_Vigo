import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "./component";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import About from "./pages/Products/About";
import SignUp from "./pages/SignUp/SignUp";
import ContactUs from "./pages/Contact/Contact";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewHome from "./pages/NewHome/NewHome";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/" exact component={NewHome} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
