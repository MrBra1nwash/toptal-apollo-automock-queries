import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App/App";
import AutoMockedProvider from "./apollo/AutoMockedProvider";

import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

ReactDOM.render(
  <AutoMockedProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AutoMockedProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </ApolloProvider>,
//   document.getElementById("root")
// );
