import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://shocking-spooky-hobgoblin-x5469966rjcp46r-4000.app.github.dev" }),
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
);
