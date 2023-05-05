import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "../NavContext";
import { isMobile } from "react-device-detect";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  const { showAbout, showPortfolio, showTeam, showContact } =
    useContext(NavContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [earthSize, setEarthSize] = useState("50%");
  const [mobileEarthSize, setMobileEarthSize] = useState("100%");

  useEffect(() => {
    setTimeout(() => setEarthSize("100%"), 3000);
    setTimeout(() => setEarthSize("160%"), 8000);
    setTimeout(() => setMobileEarthSize("190%"), 3000);
    setTimeout(() => setMobileEarthSize("250%"), 8000);
    setTimeout(() => setIsLoaded(true), 8000);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        className={
          (showAbout ? "about " : "") +
          (showPortfolio ? "portfolio " : "") +
          (showTeam ? "team " : "") +
          (showContact ? "contact " : "")
        }
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? mobileEarthSize : earthSize,
          height: isMobile ? mobileEarthSize : earthSize,
          minHeight: isMobile ? mobileEarthSize : earthSize,
          minWidth: isMobile ? mobileEarthSize : earthSize,
          zIndex: "-1",
          opacity: isLoaded ? 1 : 0, // Set opacity based on whether the video is loaded or not
          transition:
            "opacity 2s ease-in-out, transform 2.7s cubic-bezier(0.61,0.0,0.0,1.0), min-height 2s cubic-bezier(0.61,0.0,0.0,1.0), min-width 2s cubic-bezier(0.61,0.0,0.0,1.0), width 2s cubic-bezier(0.61,0.0,0.0,1.0), height 2s cubic-bezier(0.61,0.0,0.0,1.0)",
          ...(showAbout && {
            transform: "translate(-50%, -50%) translateX(-20%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateX(-25%)",
            }),
          }),
          ...(showPortfolio && {
            transform: "translate(-50%, -50%) translateX(20%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateX(25%)",
            }),
          }),
          ...(showTeam && {
            transform: "translate(-50%, -50%) translateY(50%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateY(25%)",
            }),
          }),
          ...(showContact && {
            transform: "translate(-50%, -50%) translateY(-50%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateY(-25%)",
            }),
          }),
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
