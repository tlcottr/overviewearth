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

      // Check if page size has already been stored in localStorage
      const storedPageSize = localStorage.getItem("pageSize");
      if (!storedPageSize) {
        // If not, store the current page size in localStorage
        localStorage.setItem("pageSize", sizeInKB);
      } else {
        // If it has, use the stored value as the initial value for pageSize
        // if it is different from the current page size
        if (storedPageSize !== sizeInKB) {
          setPageSize(storedPageSize);
        }
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
