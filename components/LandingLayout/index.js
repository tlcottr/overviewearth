import React, { useState, useEffect } from "react";
import Header from "../Header";
import Head from "next/head";
import { constants } from "../../constants";
import Footer from "../Footer";
import Logo from "../Logo";

const LandingLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("contact@overview.earth");
    setShowTooltip(true);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const DesktopLayout = () => {
    return (
      <>
        <Head>
          {/*<meta name="title" content={constants.pageTitle} />
        <meta name="description" content={constants.pageDescription} />*/}
          <meta name="viewport" content="width=device-width" />
        </Head>
        <div className="h-screen p-4 md:p-8 flex flex-col items-center justify-center">
          <div className="h-screen md:h-auto flex flex-col md:flex-row items-center md:items-start justify-between font-inconsolata max-w-5xl m-2">
            <div className="pt-1">
              <Logo />
            </div>
            <div className="md:ml-11 flex flex-col">
              <div className="text-center md:text-left text-xl max-w-sm leading-tight">
                Overview is a venture capital firm investing in climate change
                solutions.
              </div>

              <div className="mt-11 py-2 h-3 flex flex-row items-center">
                <div
                  className="text-xs max-w-sm leading-tight uppercase cursor-pointer"
                  onClick={copyToClipboard}
                >
                  contact@overview.earth
                </div>
                {showTooltip && (
                  <div className="ml-2 tooltip font-inconsolata text-xs bg-[#1A1A1A] text-[#DDD7C9] rounded-md w-[125px] px-1 text-center">
                    Copied to clipboard
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const MobileLayout = () => {
    return (
      <>
        <Head>
          {/*<meta name="title" content={constants.pageTitle} />
        <meta name="description" content={constants.pageDescription} />*/}
          <meta name="viewport" content="width=device-width" />
        </Head>
        <div className="h-screen p-4 md:p-8 flex flex-col items-center justify-center">
          <div className="h-screen md:h-auto flex flex-col md:flex-row items-center md:items-start justify-between font-inconsolata max-w-5xl m-2">
            <div className="pt-1">
              <Logo />
            </div>
            <div className="text-center md:text-left text-xl max-w-sm leading-tight">
              Overview is a venture capital firm investing in climate change
              solutions.
            </div>

            <div className="mt-11 py-2 h-3 flex flex-row items-center">
              <div
                className="text-xs max-w-sm leading-tight uppercase cursor-pointer"
                onClick={copyToClipboard}
              >
                contact@overview.earth
              </div>
              {showTooltip && (
                <div className="ml-2 tooltip font-inconsolata text-xs bg-[#1A1A1A] text-[#DDD7C9] rounded-md w-[125px] px-1 text-center">
                  Copied to clipboard
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <MobileLayout>{children}</MobileLayout>
      ) : (
        <DesktopLayout>{children}</DesktopLayout>
      )}
    </>
  );
};

export default LandingLayout;
