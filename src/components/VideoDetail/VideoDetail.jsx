import React from "react";
import styles from "./VideoDetail.module.css";

function VideoDetail({ video, video: { snippet, statistics } }) {
  const date = snippet.publishedAt.substr(0, 10);
  const newDate = date.replace(/-/g, ". ");

  return (
    <section className={styles.detail}>
      <iframe
        className={styles.detail}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h2>{snippet.title}</h2>
      {/* <p>
        조회수 {statistics.viewCount}회 {newDate}
      </p> */}
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
}

export default VideoDetail;
