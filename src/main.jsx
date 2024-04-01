import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import Footer from "./components/Footer.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ExpenseProvider>
          <Header />
          <AppRouter />
          <Footer />
        </ExpenseProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
