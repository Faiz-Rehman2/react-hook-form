import * as React from "react";
import Layout from "./layout";
// import Navbar from "./components/Navbar";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import VerifyAdmission from "./components/VerifyAdmission";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  },
  
  {
    path: "/verifyadmission",
    element: <VerifyAdmission />
  },

  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);