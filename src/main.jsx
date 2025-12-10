import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import IPODetail from "./Pages/IPO/IPODetail";
import IPO from "./Pages/IPO/IPO";
import "./index.css"
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    
    <Routes>
    
      <Route path="/ipo" element = {<IPO/>}>
        <Route path=":companyID" element={<IPODetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
