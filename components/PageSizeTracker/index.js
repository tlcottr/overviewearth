import { useState, useEffect } from "react";

const PageSizeTracker = () => {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const trackPageSize = () => {
      if (window.navigator && window.navigator.hardwareConcurrency) {
        // The navigator.hardwareConcurrency property is supported
        // in this browser
        const hardwareConcurrency = window.navigator.hardwareConcurrency;
        const pageSizeInKB = Math.round(hardwareConcurrency * 1024);
        setPageSize(pageSizeInKB);
      } else {
        // The navigator.hardwareConcurrency property is not supported
        // in this browser
        setPageSize("N/A");
      }
    };

    trackPageSize();
  }, []);

  return (
    <div className="flex flex-row items-center">
      <span className="uppercase">Data load</span>
      <span className="bg-[color:var(--blue)] py-[1px] px-2 mx-2 rounded-full text-white">
        {pageSize}kb
      </span>
    </div>
  );
};

export default PageSizeTracker;
