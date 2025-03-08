import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="html" element={<Resources category="html" />} />
          <Route path="css" element={<Resources category="css" />} />
          <Route path="javascript" element={<Resources category="javascript" />} />
          <Route path="react" element={<Resources category="react" />} />
          <Route path="sanity" element={<Resources category="sanity and headless cms" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
