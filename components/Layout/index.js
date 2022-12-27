import React from "react";
import Header from "../Header";
import Head from "next/head";
import { constants } from "../../constants";
import Footer from "../Footer";

const Layout = ({ children }) => {
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

export default Layout;
