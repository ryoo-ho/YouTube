import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Youtube from "./service/youtube";
import "./index.css";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
