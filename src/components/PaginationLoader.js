import React, { useEffect } from "react";

function PaginationLoader({ onLoadMore }) {
  useEffect(() => {
    const handleScroll = () => {
      console.log("handlescroll called");
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 500) {
        onLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onLoadMore]);

  return (
    <div className="text-center text-gray-400 mt-2">Loading more data...</div>
  );
}

export default PaginationLoader;
