import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./elements/Loading";
import Footer from "./Footer"
import Nav from "./Nav";
import "./styles/main.css";

export const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  return (
    <div className="main_layout">
      <Nav />
      <Outlet context={[setLoading]} />
      {loading ? <Loading /> : null}
      {/* <Footer /> */}
    </div>
  );
};
