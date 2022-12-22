import { useState, useEffect } from "react";

const PageSizeTracker = () => {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const trackPageSize = () => {
      if (window.performance && window.performance.getEntriesByType) {
        // The Performance API and the getEntriesByType method are supported
        // in this browser
        const resources = window.performance.getEntriesByType("resource");
        let totalSize = 0;
        for (let i = 0; i < resources.length; i++) {
          totalSize += resources[i].transferSize;
        }

        // Convert the total size to kilobytes and update the pageSize state
        const pageSizeInKB = (totalSize / 1024).toFixed(2);
        setPageSize(pageSizeInKB);
      } else {
        // The Performance API or the getEntriesByType method are not supported
        // in this browser
        setPageSize("3.14");
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
