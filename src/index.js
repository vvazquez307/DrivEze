import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import { Router } from "react-router-dom";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<Main />);
