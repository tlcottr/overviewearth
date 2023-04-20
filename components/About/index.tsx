import React from "react";
import styles from "./styles.module.scss";
import Return from "./Return";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Return size={50} />
        <span className={styles.border}>
          <h1 className={styles.title}>About</h1>
        </span>
        <div>
          <div>
            The “overview effect,” coined by author Frank White, is a profound
            experience that astronauts have when they see the Earth from space,
            feeling a sense of awe and interconnectedness with our planet. It
            inspires a deeper appreciation for the Earth and a desire to protect
            it. To put it simply, it’s the realization that this is all we’ve
            got.
          </div>
          <br></br>
          <div>
            At Overview, we are driven by this concept, investing in companies
            that are creating solutions to address climate change. Our mission
            is to support and partner with entrepreneurs who can unlock
            innovations that have the potential to transform industries and make
            our future more resilient and equitable for generations to come.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
