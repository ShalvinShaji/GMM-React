import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from "react-redux";
import store from "../src/js/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Header />
          <App />
          <Footer />
        </>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
