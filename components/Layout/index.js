import React from "react";
import Header from "../Header";
import Head from "next/head";
import { constants } from "../../constants";
import Footer from "../Footer";
import LogoSm from "../LogoSm";

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
      <div className="h-screen p-4 md:p-8 flex justify-center items-center">
        <main className="flex flex-col md:flex-row justify-between items-start max-w-full">
          <div className="mr-[0] md:mr-[100px] mb-5 md:mb-[0] pt-[0] md:pt-[12.5px]">
            <LogoSm />
          </div>
          <div className="max-w-2xl font-helvetica font-normal text-4xl lowercase">
            We are Overview Capital, an early stage investment vehicle for
            companies specializing in climate mitigation and environmental
            regeneration.
          </div>
        </main>
      </div>
    </>
  );
};

const Layout = () => {
  return Online ? <OnlineLayout /> : <OfflineLayout />;
};

export default Layout;
