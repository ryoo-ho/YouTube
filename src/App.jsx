import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoList from "./components/VideoList/VideoList";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import VideoDetail from "./components/VideoDetail/VideoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube.search(query).then((videos) => {
      // const idArray = videos.map((item) => item.id);
      setVideos(videos);
    });
    // .then((item) => setVideos(item));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
