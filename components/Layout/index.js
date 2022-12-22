import React from "react";
import Header from "../Header";
import Head from "next/head";
import { constants } from "../../constants";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content={constants.pageDescription} />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className="p-8">
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
