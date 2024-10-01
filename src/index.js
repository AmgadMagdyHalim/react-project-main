import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Css from "./pages/Css";
import Html from "./pages/Html";
import Js from "./pages/Js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "css",
    element: <Css />,
  },
  {
    path: "html",
    element: <Html />,
  },
  {
    path: "js",
    element: <Js />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
