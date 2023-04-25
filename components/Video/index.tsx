import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/static/video/EarthTransparent.webm"
      >
        <source
          src="/static/video/EarthTransparent.webm"
          type="video/webm"
          width="100%"
          height="100%"
        />
        <source
          src="/static/video/EarthTransparent.mp4"
          type="video/mp4"
        ></source>
        <source
          src="/static/video/EarthTransparent.mov"
          type="video/mov"
        ></source>
      </video>
    </div>
  );
};

export default Video;
