import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

function VideoList(props) {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
}

export default VideoList;
