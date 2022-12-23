import { useState, useEffect } from "react";

const PageSizeTracker = () => {
  const [pageSize, setPageSize] = useState(0);
  const [displayedPageSize, setDisplayedPageSize] = useState(0);

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
        // if the current page size is different, update the storePageSize
        localStorage.setItem("pageSize", sizeInKB);
        setPageSize(sizeInKB);
      }
    };

    trackPageSize();
  }, []);

  useEffect(() => {
    // Animate the ticker
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue++;
      setDisplayedPageSize(currentValue);
      if (currentValue >= pageSize) {
        clearInterval(interval);
      }
    }, 10);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [pageSize]);

  return (
    <div className="flex flex-row items-center">
      <span className="uppercase">Data load</span>
      <span className="bg-[color:var(--blue)] py-[1px] px-2 mx-2 rounded-full text-white">
        {displayedPageSize}kb
      </span>
    </div>
  );
};

export default PageSizeTracker;
