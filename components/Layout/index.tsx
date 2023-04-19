import React from "react";
import Footer from "../Footer";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
