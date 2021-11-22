import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDJGE2FAB3UDdRRwyNsnhVcmH2SzvA0RJY`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=철구&key=AIzaSyDJGE2FAB3UDdRRwyNsnhVcmH2SzvA0RJY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
