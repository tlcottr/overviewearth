import React, { useContext } from "react";
import { isMobile } from "react-device-detect";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: "-10",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "160%",
          height: "160%",
          zIndex: "-1",
        }}
      >
        <source
          src="/static/video/EarthMobile.mov"
          type="video/quicktime"
          width="200%"
          height="200%"
        />
        <source src="/static/video/EarthTransparent.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
