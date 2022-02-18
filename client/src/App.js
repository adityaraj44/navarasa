import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/main.scss";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
