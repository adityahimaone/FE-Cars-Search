import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Search from "../pages/Search/search";
import Defaultlayout from "../layouts/Default";
import CarsDetail from "../pages/Cars/detail";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Defaultlayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="cars/:id" element={<CarsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
