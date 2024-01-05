import React from "react";
import ReactDOM from "react-dom/client";
import { InterviewApp } from "./InterviewApp.jsx";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <InterviewApp />
    </Provider>
  </React.StrictMode>
);
