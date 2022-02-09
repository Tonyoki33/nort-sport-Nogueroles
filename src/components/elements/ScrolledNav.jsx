import React from 'react';
import CardWidget from "../CardWidget";
import { Link } from "react-router-dom";

const ScrolledNav = () => {
  return (
    <nav className='nav_scrolled '>
    <section className="nav_logo ">
        <li>
        <Link to={`/nort-sport-Nogueroles`}><i className="fas fa-adjust"></i></Link>
        </li>
    </section>
    <section className="nav_functions-scrolled">
        <form className=".nav_search-scrolled ">
            <input className="nav_search-bar"></input>
            <button className="nav_search-btn" type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
       
        <div className="nav_categories-scrolled ">
            <ul className="nav_categories-ul-scrolled">
            <li className="nav_categories-li-scrolled" >
                <a className="nav_category-a" href="#">HOMBRE</a>
                <ul className="nav_subcategories-ul">
                    <li>
                        <a className="nav_subcategory-a">Remeras</a>
                        <a className="nav_subcategory-a">Calzado</a>
                        <a className="nav_subcategory-a">Pantalones</a>
                        <a className="nav_subcategory-a">Accesorios</a>
                    </li>
                </ul>
                </li>
            <li className="nav_categories-li-scrolled" >
                <a className="nav_category-a" href="#">MUJER</a>
                <ul className="nav_subcategories-ul">
                    <li>
                        <a className="nav_subcategory-a">Remeras</a>
                        <a className="nav_subcategory-a">Calzado</a>
                        <a className="nav_subcategory-a">Pantalones</a>
                        <a className="nav_subcategory-a">Accesorios</a>
                    </li>
                </ul>
                </li>
            <li className="nav_categories-li-scrolled" >
                <a className="nav_category-a" href="#">NIÑOS</a>
                <ul className="nav_subcategories-ul">
                    <li>
                        <a className="nav_subcategory-a">Remeras</a>
                        <a className="nav_subcategory-a">Calzado</a>
                        <a className="nav_subcategory-a">Pantalones</a>
                        <a className="nav_subcategory-a">Accesorios</a>
                    </li>
                </ul>
                </li>
            <li className="nav_categories-li-scrolled" >
                <a className="nav_category-a" href="#">MARCAS</a>
                <ul className="nav_subcategories-ul">
                    <li>
                        <a className="nav_subcategory-a">Nike</a>
                        <a className="nav_subcategory-a">Adidas</a>
                        <a className="nav_subcategory-a">Fila</a>
                        <a className="nav_subcategory-a">Reebok</a>
                    </li>
                </ul>
                </li>
            <li className="nav_categories-li-scrolled" >
                <a className="nav_category-a" href="#">SALE</a>
                <ul className="nav_subcategories-ul">
                    <li>
                        <a className="nav_subcategory-a">Remeras</a>
                        <a className="nav_subcategory-a">Calzado</a>
                        <a className="nav_subcategory-a">Pantalones</a>
                        <a className="nav_subcategory-a">Accesorios</a>
                    </li>
                </ul>
                </li>
            </ul> 
        </div>
        <form className=".nav_interactions-scrolled">
            <a id="nav_btn-prof" className="nav_profile">
            <i className="far fa-user"></i>
            </a>
            <a id="nav_btn-notif" className="nav_notifications">
            <i className="far fa-bell"></i>
            </a>
            <CardWidget/>
        </form>
    </section>
    </nav>
  
    );
};

export default ScrolledNav;




