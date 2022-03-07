import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/main.scss";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import SubmitSong from "./components/SubmitEntry/SubmitSong";
import SubmitFinalize from "./components/SubmitEntry/SubmitFinalize";
import SubmitInfo from "./components/SubmitEntry/SubmitInfo";
import { FormFieldProvider } from "./components/context/form-field-context";
import Login from "./components/Admin/Auth/Login";
import AllEntries from "./components/Admin/Entries/AllEntries";
import EntryDetail from "./components/Admin/Entries/EntryDetail";
import EditEntry from "./components/Admin/Entries/EditEntry";
import { ApiProvider } from "./components/context/api-context";

const App = () => {
  const location = useLocation();

  return (
    <ChakraProvider>
      <FormFieldProvider>
        <ApiProvider>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/aboutus">
                <About />
              </Route>
              <Route exact path="/submitentry">
                <SubmitInfo />
              </Route>
              <Route exact path="/submitsong">
                <SubmitSong />
              </Route>
              <Route exact path="/finalizeentry">
                <SubmitFinalize />
              </Route>
              <Route exact path="/navarasa/admin/login">
                <Login />
              </Route>
              <Route exact path="/navarasa/admin/entries">
                <AllEntries />
              </Route>
              <Route exact path="/navarasa/admin/entries/entry/:id">
                <EntryDetail />
              </Route>
              <Route exact path="/navarasa/admin/entries/editentry/:id">
                <EditEntry />
              </Route>
            </Switch>
          </AnimatePresence>
        </ApiProvider>
      </FormFieldProvider>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
