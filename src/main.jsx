import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* All CSS Imports */

import "./css/fonts.css";
import "./css/index.css";
import "./css/css-responsive.css";
import "./css/animations.css";

/* Importing Bootstrap */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

/* Using React Router Dom */

import { router } from "./Router/router";
import { RouterProvider } from "react-router-dom";

/* 

-
-
-
-

*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
