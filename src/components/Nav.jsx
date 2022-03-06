import React, { Fragment } from "react";
import "./styles/fontawesome-free-5.15.4-web/css/all.css";
import "./styles/Nav.css";
import "./styles/Nav-scrolled.css";
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <section className="nav_logo ">
          <li>
            <Link to={`/nort-sport-Nogueroles`}>
              <i className="fas fa-adjust"></i>
            </Link>
          </li>
        </section>
        <section className="nav_functions">
          <div className="burger-nav"> </div>

          <div className="nav_categories"></div>
          <form className="nav_interactions">
            <a id="nav_btn-prof" className="nav_profile">
              <i className="far fa-user"></i>
            </a>
            <a id="nav_btn-notif" className="nav_notifications">
              <i className="far fa-bell"></i>
            </a>
            <CardWidget />
          </form>
        </section>
      </nav>
    </Fragment>
  );
};

export default Nav;
