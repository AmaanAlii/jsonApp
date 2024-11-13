import React, { useState, useEffect, useCallback } from "react";
// import ReactJson from "react-json-view";
import PaginationLoader from "./PaginationLoader";
import ReactJsonView from "@microlink/react-json-view";

function JsonViewer({ data, setData }) {
  const [displayedData, setDisplayedData] = useState([]);
  const chunkSize = 10;

  useEffect(() => {
    if (data) {
      setDisplayedData(data.slice(0, chunkSize));
    }
  }, [data]);

  const loadMoreData = useCallback(() => {
    const currentLength = displayedData.length;
    if (currentLength < data.length) {
      const nextChunk = data.slice(currentLength, currentLength + chunkSize);
      setDisplayedData((prevData) => [...prevData, ...nextChunk]);
    }
  }, [displayedData, data]);

  const handleEdit = (edit) => {
    setData(edit.updated_src);
  };

  const handleAdd = (add) => {
    setData(add.updated_src);
  };

  return (
    <div className="text-sm">
      {displayedData.map((chunk, index) => (
        <ReactJsonView
          key={index}
          src={chunk}
          onEdit={handleEdit}
          onAdd={handleAdd}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
          style={{ backgroundColor: "#2d2d2d", marginBottom: "10px" }}
        />
      ))}
      <PaginationLoader onLoadMore={loadMoreData} />
    </div>
  );
}

export default JsonViewer;
