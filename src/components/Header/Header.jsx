import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const location = useLocation();
  const [active, setActive] = useState(false)
  return (
    <>
      <header>
        <img src="./logo@3x.png" alt="logo" />
        <div
          className={
            "header_right " + (location.pathname === "/" ? "active" : " ")
          }
        >
          <NavLink className="links" to="/jogs">
            JOGS
          </NavLink>
          <NavLink className="links" to="/info">
            INFO
          </NavLink>
          <NavLink className="links" to="/contactUs">
            CONTACT US
          </NavLink>
          <img className={`filter_icon ${active ? "active" : " "}`}  onClick={() => setActive(!active)} src="./filter-active@3x.png" alt="filter-active" />
        </div>
      </header>
      <div className={`dateWrapper ${active ? "active" : " "}`}>
        <label>
          Date from
          <input type="date" />
          Date to
          <input type="date" />
        </label>
      </div>
    </>
  );
}
