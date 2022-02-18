import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/main.scss";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ChakraProvider>
  );
};

export default App;
