import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/main.scss";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <p>hey</p>
        <h1>aditya</h1>
      </div>
    </ChakraProvider>
  );
};

export default App;
