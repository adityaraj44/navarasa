import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/main.scss";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import SubmitEntry from "./components/SubmitEntry/SubmitEntry";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>

      <Footer />
    </ChakraProvider>
  );
};

export default App;
