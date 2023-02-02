import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from '@ethersproject/providers';
import { ContextAPIProvider } from "./components/features/contextapi";


const getLibrary = (provider) => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}
ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <ContextAPIProvider>
             <App />
          </ContextAPIProvider>
        </Router>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
