import React from "react";
import VideoItem from "../VideoItem/VideoItem";

function VideoList(props) {
  return (
    <ul>
      {props.videos
        .filter((video) => !!video.id?.videoId)
        .map((video, index) => (
          <VideoItem key={video.id.videoId} video={video} />
        ))}
    </ul>
  );
}

export default VideoList;
