import React from "react";
import { Link } from "react-router-dom";
import { internalRoutes } from "../utils/internalRoutes";
// import { renderAsHTML, renderAsMarkdown } from "../utils/rendererUtils";

function Renderer({ renderedDataState }) {
  //   const [renderType, setRenderType] = useState("html");
  //   const [output, setOutput] = useState("");

  //   console.log("renderedDataState:", renderedDataState);

  return (
    <div className=" w-full flex flex-col justify-center items-center bg-gray-800 space-y-2">
      {renderedDataState ? (
        <div className="p-4  rounded mt-2">
          <pre className="text-white whitespace-pre-wrap flex flex-col justify-start items-start gap-5 ">
            {renderedDataState}
          </pre>
        </div>
      ) : (
        <div>
          <h1>There seems to be a problem in rendering the JSON data.</h1>
          <h2>
            Please try again from the{" "}
            <Link
              to={internalRoutes.home}
              className=" bg-blue-500 text-white py-1 px-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Home Page
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Renderer;
