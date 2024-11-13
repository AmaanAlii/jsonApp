import React, { useState } from "react";
import ApiInput from "./components/ApiInput";
import JsonViewer from "./components/JsonViewer";
import Renderer from "./components/Renderer";
import ErrorMessage from "./components/ErrorMessage";
import { fetchData } from "./utils/api";

function App() {
  const [jsonData, setJsonData] = useState([]);
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

  return (
    <div className="flex h-screen">
      <div className="w-1/2 overflow-y-auto bg-gray-800 p-4">
        {jsonData.length > 0 ? (
          <JsonViewer data={jsonData} setData={setJsonData} />
        ) : (
          <p className="text-white">No data to display</p>
        )}
      </div>
      <div className="w-1/2 p-4 space-y-4 bg-gray-900 text-white">
        <ApiInput onFetch={handleFetch} />
        {jsonData.length > 0 && <Renderer data={jsonData} />}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}

export default App;
