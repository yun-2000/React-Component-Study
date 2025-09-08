import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Shopping_Cart from "./Shopping_Cart";
// import Component from "./Study_Component";
import Counter from "./Counter/Counter.jsx";
import LoginForm from "./Form/Form.jsx";
import "./index.css";
// import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Shopping_Cart /> */}
    {/* <Component /> */}
    {/* <Counter /> */}
    <LoginForm />
  </StrictMode>
);
