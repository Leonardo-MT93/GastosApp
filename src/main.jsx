import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalProvider.jsx";
import Header from "./components/Header.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalProvider>
      <Header/>
      <AppRouter/>
      <Footer/>
    </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
