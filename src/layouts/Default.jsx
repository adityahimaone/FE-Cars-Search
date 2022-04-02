import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "@/components/Header/Navbar";
// import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

export default function Default() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
