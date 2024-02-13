import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import BlogsDataContextProvider from "./context/BlogsDataContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BlogsDataContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlogsDataContextProvider>
);
