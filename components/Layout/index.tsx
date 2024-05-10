import React from "react";
import Footer from "../Footer";
import styles from "./styles.module.scss";
import OfflineFooter from "../OfflineFooter";
import Header from "../Header/Index";

type Props = { children: React.ReactNode };
const OfflineLayout = () => {
  return (
    <div className={styles.offline}>
      <h1 className={styles.inner}>
        Overview is a venture capital firm investing in climate change
        solutions. To put our values into practice across all that we touch, our
        site is low-impact, having a smaller footprint than 97% of webpages. To
        further limit our energy usage and carbon footprint, our site is offline
        from 1am to 5am.
      </h1>
      <OfflineFooter />
    </div>
  );
};

const Layout = ({ children }: Props) => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 1 && hour < 5) {
    return <OfflineLayout />;
  } else {
    return (
      <div className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
};

export default Layout;
