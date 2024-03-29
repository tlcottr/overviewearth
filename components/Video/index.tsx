import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "../NavContext";
import { isMobile } from "react-device-detect";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  const { showAbout, showPortfolio, showTeam, showContact } =
    useContext(NavContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [earthSize, setEarthSize] = useState("50%");
  const [mobileEarthSize, setMobileEarthSize] = useState("25%");

  useEffect(() => {
    setTimeout(() => setEarthSize("100%"), 3000);
    setTimeout(() => setEarthSize("160%"), 10000);
    setTimeout(() => setMobileEarthSize("60%"), 3000);
    setTimeout(() => setMobileEarthSize("150%"), 8000);
    setTimeout(() => setIsLoaded(true), 10000);
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
        bottom: 0,
        right: 0,
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
          transition: isMobile
            ? "opacity 2s ease-in-out, transform 2.7s cubic-bezier(0.61,0.0,0.0,1.0), min-height 2s ease-in-out, min-width 2s ease-in-out, width 2s ease-in-out, height 2s ease-in-out"
            : "opacity 2s ease-in-out, transform 2.7s cubic-bezier(0.61,0.0,0.0,1.0), min-height 2.7s ease-in-out, min-width 2.7s ease-in-out, width 2.7s ease-in-out, height 2.7s ease-in-out",
          ...(showAbout && {
            transform: "translate(-50%, -50%) translateX(-20%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateX(-40%)",
            }),
          }),
          ...(showPortfolio && {
            transform: "translate(-50%, -50%) translateX(20%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateX(40%)",
            }),
          }),
          ...(showTeam && {
            transform: "translate(-50%, -50%) translateY(50%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateY(40%)",
            }),
          }),
          ...(showContact && {
            transform: "translate(-50%, -50%) translateY(-50%)",
            ...(isMobile && {
              transform: "translate(-50%, -50%) translateY(-40%)",
            }),
          }),
        }}
      >
        <source
          src="/static/video/earthtransparent_new_H.265.mp4"
          type="video/mp4"
        />
        {/*<source
          src="/static/video/EarthMobile.mp4"
          type="video/mp4"
          width="200%"
          height="200%"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
          }}
        />*/}
      </video>
    </div>
  );
};

export default Video;
