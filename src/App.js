import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { internalRoutes } from "./utils/internalRoutes";
import RenderedPage from "./pages/RenderedPage";

function App() {
  const [dataToBeRendered, setDataToBeRendered] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [renderType, setRenderType] = useState("html");
  return (
    <div className="flex h-screen">
      <Router>
        <Routes>
          <Route
            element={
              <Home
                renderType={renderType}
                setJsonData={setJsonData}
                jsonData={jsonData}
                setRenderType={setRenderType}
                renderedDataState={dataToBeRendered}
                renderedDataSetter={setDataToBeRendered}
              />
            }
            path={internalRoutes.home}
          />
          <Route
            element={
              <RenderedPage
                renderType={renderType}
                renderedDataState={dataToBeRendered}
              />
            }
            path={internalRoutes.renderedPage}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
