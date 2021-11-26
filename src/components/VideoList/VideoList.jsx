import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

function VideoList({ videos, onVideoClick, display }) {
  const newVideo = videos?.filter((videoId) => videoId.id !== undefined);
  return (
    <ul className={styles.videos}>
      {newVideo?.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
}

export default VideoList;
