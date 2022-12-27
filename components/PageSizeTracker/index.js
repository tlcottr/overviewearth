import { useState, useEffect } from "react";

const PageSizeTracker = () => {
  const [pageSize, setPageSize] = useState(0);
  const [displayedPageSize, setDisplayedPageSize] = useState(0);

  useEffect(() => {
    const fetchPageSize = async () => {
      // Make a request to the page size checker website
      const response = await fetch(
        `https://ettvi.com/technical/page-size-checker?url=${encodeURIComponent(
          window.location.href
        )}`
      );
      // Parse the response as JSON
      const data = await response.json();
      // Set the page size to the value returned by the page size checker
      setPageSize(data.size);
    };

    fetchPageSize();
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
