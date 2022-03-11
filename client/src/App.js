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
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import { AudioProvider } from "./components/context/audio-player-context";

const App = () => {
  const location = useLocation();

  return (
    <ChakraProvider>
      <FormFieldProvider>
        <ApiProvider>
          <AudioProvider>
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
                <PublicRoute exact path="/navarasa/admin/login">
                  <Login />
                </PublicRoute>
                <PrivateRoute exact path="/navarasa/admin/entries">
                  <AllEntries />
                </PrivateRoute>
                <PrivateRoute exact path="/navarasa/admin/entries/entry/:id">
                  <EntryDetail />
                </PrivateRoute>
                <PrivateRoute
                  exact
                  path="/navarasa/admin/entries/editentry/:id"
                >
                  <EditEntry />
                </PrivateRoute>
              </Switch>
            </AnimatePresence>
          </AudioProvider>
        </ApiProvider>
      </FormFieldProvider>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
