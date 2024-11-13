import React from "react";
import Renderer from "../components/Renderer";
import { Link } from "react-router-dom";
import { internalRoutes } from "../utils/internalRoutes";

function RenderedPage({ renderedDataState }) {
  //   console.log("renderedDataState in Rendered page:", renderedDataState);

  return (
    <div className=" w-full">
      {renderedDataState?.length > 0 ? (
        <Renderer renderedDataState={renderedDataState} />
      ) : (
        <div>
          <h1>No Data To be Displayed</h1>
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

export default RenderedPage;
