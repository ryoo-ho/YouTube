import React, { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=AIzaSyDJGE2FAB3UDdRRwyNsnhVcmH2SzvA0RJY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos}></VideoList>;
}

export default App;
