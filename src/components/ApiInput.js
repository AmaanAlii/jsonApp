import React, { useState } from "react";

function ApiInput({ onFetch }) {
  const [endpoint, setEndpoint] = useState("");

  const handleFetch = () => {
    onFetch(endpoint);
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="Enter API endpoint"
        className="w-full p-2 bg-gray-700 text-white rounded"
      />
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