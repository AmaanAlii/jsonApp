import React, { useState } from "react";

function ApiInput({ onFetch }) {
  const [endpoint, setEndpoint] = useState("");
  const [error, setError] = useState(null);

  const isValidUrl = (url) => {
    const urlRegex = /^(http|https):\/\/[^ "]+\.[^ "]+$/;
    return urlRegex.test(url);
  };

  const handleFetch = () => {
    if (!isValidUrl(endpoint)) {
      setError("Please enter a valid API URL.");
      return;
    }
    setError(null);
    onFetch(endpoint);
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="Enter API endpoint"
        className={`w-full p-2 bg-gray-700 text-white rounded ${
          error ? "border border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleFetch}
        className="w-full p-2 bg-blue-600 rounded hover:bg-blue-500"
      >
        GET
      </button>
    </div>
  );
}

export default ApiInput;
