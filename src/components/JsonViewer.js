import React, { useState, useEffect, useCallback } from "react";
import PaginationLoader from "./PaginationLoader";
import ReactJsonView from "@microlink/react-json-view";

function JsonViewer({ data, setData }) {
  const [displayedData, setDisplayedData] = useState([]);
  const chunkSize = 100;

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
    const updatedSrc = edit.updated_src;
    const editedId = updatedSrc.id;

    const updatedData = data.map((item) =>
      item.id === editedId ? updatedSrc : item
    );

    setData(updatedData);
  };

  const handleAdd = (add) => {
    const updatedSrc = add.updated_src;
    const editedId = updatedSrc.id;

    const updatedData = data.map((item) =>
      item.id === editedId ? updatedSrc : item
    );

    setData(updatedData);
  };

  return (
    <div className="text-sm">
      {displayedData?.map((chunk, index) => (
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
      {/* Uncomment PaginationLoader if you implement infinite scroll */}
      {/* <PaginationLoader onLoadMore={loadMoreData} /> */}
    </div>
  );
}

export default JsonViewer;
