import React, { useContext, useEffect, useState } from "react";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768); // or use any other mobile breakpoint
    }
  }, []);

  const videoStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "160%",
    height: "160%",
    minHeight: isMobile ? "250%" : "400%",
    minWidth: isMobile ? "250%" : "400%",
    zIndex: "-1",
  };

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
      <video autoPlay loop muted playsInline style={videoStyles}>
        <source
          src="/static/video/EarthMobile.mov"
          type="video/quicktime"
          width="200%"
          height="200%"
        />
        <source src="/static/video/Earth.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
