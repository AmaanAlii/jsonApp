import React, { useState } from "react";
import { renderAsHTML, renderAsMarkdown } from "../utils/rendererUtils";

function Renderer({ data }) {
  const [renderType, setRenderType] = useState("html");
  const [output, setOutput] = useState("");

  const handleRender = () => {
    if (renderType === "html") {
      setOutput(renderAsHTML(data));
    } else if (renderType === "markdown") {
      setOutput(renderAsMarkdown(data));
    }
  };

  return (
    <div className="space-y-2">
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
      {output && (
        <div className="p-4 bg-gray-800 rounded mt-2">
          <pre className="text-white whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}

export default Renderer;
