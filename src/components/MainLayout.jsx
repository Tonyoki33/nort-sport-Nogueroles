import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./elements/Loading";
import Nav from "./Nav";
import "./styles/main.css";

export const Layout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="main_layout">
      <Nav />
      <Outlet context={[setLoading]} />
      {loading ? <Loading /> : null}
    </div>
  );
};
