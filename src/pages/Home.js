import React, { useState } from "react";
import { fetchData } from "../utils/api";
import { renderAsHTML, renderAsMarkdown } from "../utils/rendererUtils";

// import Renderer from "../components/Renderer";
import JsonViewer from "../components/JsonViewer";
import ErrorMessage from "../components/ErrorMessage";
import ApiInput from "../components/ApiInput";
import { useNavigate } from "react-router-dom";
import { internalRoutes } from "../utils/internalRoutes";

function Home({
  renderType,
  setRenderType,
  setJsonData,
  jsonData,
  renderedDataState,
  renderedDataSetter,
}) {
  const navigate = useNavigate();

  //   const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState(null);

  const handleFetch = async (endpoint) => {
    try {
      setError(null); // Clear previous error
      const data = await fetchData(endpoint);
      setJsonData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRender = () => {
    if (renderType === "html") {
      renderedDataSetter(renderAsHTML(jsonData));
    } else if (renderType === "markdown") {
      renderedDataSetter(renderAsMarkdown(jsonData));
    }
    navigate(internalRoutes.renderedPage);
  };

  return (
    <div className=" w-full flex h-screen">
      <div className="w-[80%] overflow-y-auto bg-gray-800 p-4">
        {jsonData?.length > 0 ? (
          <JsonViewer data={jsonData} setData={setJsonData} />
        ) : (
          <p className="text-white">No data to display</p>
        )}
      </div>
      <div className="w-[20%] p-4 space-y-4 bg-gray-900 text-white">
        <ApiInput onFetch={handleFetch} />
        <div className="flex items-center space-x-2">
          <label>
            <input
              type="radio"
              value="html"
              checked={renderType === "html"}
              onChange={() => setRenderType("html")}
            />
            HTML
          </label>
          <label>
            <input
              type="radio"
              value="markdown"
              checked={renderType === "markdown"}
              onChange={() => setRenderType("markdown")}
            />
            Markdown
          </label>
        </div>
        <button
          onClick={handleRender}
          className="w-full p-2 bg-green-600 rounded hover:bg-green-500"
        >
          Render
        </button>
        {/* {jsonData.length > 0 && <Renderer data={jsonData} />} */}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default Home;
