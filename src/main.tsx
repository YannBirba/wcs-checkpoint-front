import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

if (!apiEndpoint) {
  throw new Error("VITE_API_ENDPOINT is not defined");
}

const httpLink = createHttpLink({
  uri: apiEndpoint,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
