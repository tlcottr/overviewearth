import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted>
        <source src="/static/video/Earth Transparent.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
