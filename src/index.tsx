import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
