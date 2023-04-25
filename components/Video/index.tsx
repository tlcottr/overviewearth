import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { NavContext } from "../NavContext";

type Props = {};

const Video: React.FC<Props> = (props: Props) => {
  const { showAbout, showPortfolio, showTeam, showContact } =
    useContext(NavContext);

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
        src="/static/video/EarthTransparent.webm"
        className={
          showAbout
            ? "about"
            : "" + showPortfolio
            ? "portfolio"
            : "" + showTeam
            ? "team"
            : "" + showContact
            ? "contact"
            : ""
        }
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "160%",
          height: "160%",
          zIndex: "-1",
          transition: "transform 2s ease",
          ...(showAbout && {
            transform: "translate(-50%, -50%) translateX(-50%)",
          }),
          ...(showPortfolio && {
            transform: "translate(-50%, -50%) translateX(50%)",
          }),
          ...(showTeam && {
            transform: "translate(-50%, -50%) translateY(50%)",
          }),
          ...(showContact && {
            transform: "translate(-50%, -50%) translateY(-50%)",
          }),
        }}
      >
        <source
          src="/static/video/EarthTransparent.webm"
          type="video/webm"
          width="100%"
          height="100%"
        />
        <source src="/static/video/EarthTransparent.mov" type="video/mov" />
      </video>
    </div>
  );
};

export default Video;
