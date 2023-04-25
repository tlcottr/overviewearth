import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted playsInline controls>
        <source
          src="/static/video/EarthTransparent.webm"
          type="video/webm"
          width="100%"
          height="100%"
        />
      </video>
    </div>
  );
};

export default Video;
