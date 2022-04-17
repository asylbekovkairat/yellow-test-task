import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header({ setDateFrom, setDateTo }) {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [burger, setBurger] = useState(false)

  return (
    <>
      <header>
        <img src="./images/logo@3x.png" alt="logo" />
        <div
          className={
            "header_right " + (location.pathname === "/" ? "active" : " ")
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
          <img
            className={`filter_icon ${
              active && location.pathname === "/jogs" ? "active" : " "
            }`}
            onClick={() => setActive(!active)}
            src="./images/filter-active@3x.png"
            alt="filter-active"
          />
          <div className="burger">
            <svg
              onClick={() => setBurger(!burger)}
              className={
                "ham hamRotate ham4 " + (burger ? " active" : "")
              }
              viewBox="0 0 100 100"
              width="50"
            >
              <path
                className="line top"
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              ></path>
              <path className="line middle" d="m 70,50 h -40"></path>
              <path
                className="line bottom"
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
    </>
  );
}
