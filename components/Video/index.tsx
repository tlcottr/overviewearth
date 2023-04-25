import React from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        url="/static/video/Earth Transparent.webm"
        playing={true}
        loop={true}
        muted={true}
        playsinline={true}
        width="160%"
        height="160%"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      />
    </div>
  );
};

export default Video;
