import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

function VideoList(props) {
  return (
    <ul className={styles.videos}>
      {props.videos
        .filter((video) => !!video.id?.videoId)
        .map((video, index) => (
          <VideoItem key={video.id.videoId} video={video} />
        ))}
    </ul>
  );
}

export default VideoList;
