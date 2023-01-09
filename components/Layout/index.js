import React from "react";
import Header from "../Header";
import Head from "next/head";
import { constants } from "../../constants";
import Footer from "../Footer";

const currentHour = new Date().getHours();
const Online =
  (currentHour >= 8 && currentHour < 24) ||
  (currentHour >= 0 && currentHour < 1);
console.log(Online);

const OnlineLayout = ({ children }) => {
  return (
    <>
      <Head>
        {/*<meta name="title" content={constants.pageTitle} />
        <meta name="description" content={constants.pageDescription} />*/}
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className="h-screen p-4 md:p-8 flex flex-col justify-between">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
};

const OfflineLayout = ({ children }) => {
  return (
    <>
      <Head>
        {/*<meta name="title" content={constants.pageTitle} />
        <meta name="description" content={constants.pageDescription} />*/}
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className="h-screen p-4 md:p-8">
        <main className="">{children}</main>
      </div>
    </>
  );
};

const Layout = () => {
  return Online ? <OnlineLayout /> : <OfflineLayout />;
};

export default Layout;
