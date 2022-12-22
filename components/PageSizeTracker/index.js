import { useState, useEffect } from "react";

const PageSizeTracker = () => {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const trackPageSize = () => {
      var resources = window.performance.getEntriesByType("resource");
      var totalSize = 0;
      for (var i = 0; i < resources.length; i++) {
        totalSize += resources[i].transferSize;
      }
      var sizeInKB = (totalSize / 1024).toFixed(2);
      setPageSize(sizeInKB);
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
