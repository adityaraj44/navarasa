import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/main.scss";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import SubmitEntry from "./components/SubmitEntry/SubmitEntry";

const App = () => {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutus">
          <About />
        </Route>
        <Route exact path="/submitentry">
          <SubmitEntry />
        </Route>
      </Switch>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
