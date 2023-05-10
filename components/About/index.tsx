import React, { useContext } from "react";
import NavContext from "../NavContext";
import styles from "./styles.module.scss";
import Return from "./Return";

type Props = {};

const About = (props: Props) => {
  const {
    showAbout,
    setShowAbout,
    showPortfolio,
    setShowPortfolio,
    showTeam,
    setShowTeam,
    showContact,
    setShowContact,
  } = useContext(NavContext);

  const handleSwipeRight = () => {
    setShowAbout(!showAbout);
    setShowPortfolio(false);
    setShowTeam(false);
    setShowContact(false);
  };

  return (
    <>
      <div
        className={styles.navContainer}
        onTouchStart={(event) => {
          if (event.touches[0].target) {
            const touchStartX = event.touches[0].clientX;
            return touchStartX;
          }
        }}
        onTouchEnd={(event) => {
          console.log(event);
          if (event.changedTouches[0].target && event.targetTouches[0].target) {
            const touchEndX = event.changedTouches[0].clientX;
            const touchStartX = event.targetTouches[0].clientX;
            const touchDiff = touchStartX - touchEndX;

            if (touchDiff > 50) {
              handleSwipeRight();
            }
          }
        }}
      >
        <div className={styles.arrowContainer}>
          <Return size={50} />
        </div>
        <div className={styles.container}>
          <span className={styles.border}>
            <h1 className={styles.title}>About</h1>
          </span>
          <div>
            <div>
              The “overview effect,” coined by author Frank White, is a profound
              experience that astronauts have when they see the Earth from
              space, feeling a sense of awe and interconnectedness with our
              planet. It inspires a deeper appreciation for the Earth and a
              desire to protect it. To put it simply, it’s the realization that
              this is all we’ve got.
            </div>
            <br></br>
            <div>
              At Overview, we are driven by this concept, investing in companies
              that are creating solutions to address climate change. Our mission
              is to support and partner with entrepreneurs who can unlock
              innovations that have the potential to transform industries and
              make our future more resilient and equitable for generations to
              come.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
