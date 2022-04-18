import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header({ setDateFrom, setDateTo, burger, setBurger }) {
  const location = useLocation();
  const [active, setActive] = useState(false);

  const openBurger = () => {
    setBurger(!burger);
    setActive(false);
  };

  return (
    <>
      <header className={`header ${burger ? "active" : " "}`}>
        <img
          src="./images/logo@3x.png"
          alt="logo"
          className={`logo ${burger ? "active" : " "}`}
        />
        <div
          className={
            "header_right " +
            (location.pathname === "/" || burger ? "active" : " ")
          }
        >
          <div className="navLink_wrapper">
            <NavLink className="links" to="/jogs">
              JOGS
            </NavLink>
            <NavLink className="links" to="/info">
              INFO
            </NavLink>
            <NavLink className="links" to="/contactUs">
              CONTACT US
            </NavLink>
          </div>
          <div className={`filter_iconWrapper ${burger ? "active" : " "}`}>
            <img
              className={`filter_icon ${
                active && location.pathname === "/jogs" ? "active" : " "
              }`}
              onClick={() => setActive(!active)}
              src="./images/filter-active@3x.png"
              alt="filter-active"
            />
          </div>
          <div className="burger">
            <svg
              onClick={() => {
                openBurger();
              }}
              className={"ham hamRotate ham4 " + (burger ? " active" : "")}
              viewBox="0 0 100 100"
              width="50"
            >
              <path
                className={`line top ${burger ? "active" : " "}`}
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              ></path>
              <path
                className={`line middle ${burger ? "active" : " "}`}
                d="m 70,50 h -40"
              ></path>
              <path
                className={`line bottom ${burger ? "active" : " "}`}
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <div
        className={`dateWrapper ${
          active && location.pathname === "/jogs" ? "active" : " "
        }`}
      >
        <label>
          Date from
          <input
            type="date"
            onChange={(e) => setDateFrom(new Date(e.target.value).getTime())}
          />
          Date to
          <input
            type="date"
            onChange={(e) => setDateTo(new Date(e.target.value).getTime())}
          />
        </label>
      </div>
      <div className={`menu_wrapper ${burger ? " active" : " "}`}>
        <div className="menu">
          <NavLink
            onClick={() => setBurger(false)}
            className="menu_links"
            to="/jogs"
          >
            JOGS
          </NavLink>
          <NavLink
            onClick={() => setBurger(false)}
            className="menu_links"
            to="/info"
          >
            INFO
          </NavLink>
          <NavLink
            onClick={() => setBurger(false)}
            className="menu_links"
            to="/contactUs"
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </>
  );
}
