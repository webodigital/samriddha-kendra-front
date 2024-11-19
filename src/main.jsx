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

/* Apollo Client Setup */
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";

console.log("API URL:", import.meta.env.VITE_API_URL); // For debugging

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
