import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="myHeader">
      <header className="hide-when-mobile amgad">
        <h1>
          <Link to="/">Courses 4 Arab</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            <ul className="sub-ul">
              <li>
                <Link to="/html">Full Course</Link>
              </li>
              <li>
                <Link to="/html">Crash Course</Link>
              </li>
              <li>
                <Link to="/html">learn in 1h</Link>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            <ul className="sub-ul">
              <li>
                <Link to="/css">Full Course</Link>
              </li>
              <li>
                <Link to="/css">CSS Examples</Link>
              </li>
              <li className="mini-projects">
                <Link to="/css">mini projects&nbsp; + </Link>
                <ul className="sub-sub-ul">
                  <li>
                    <Link to="/css">project 1</Link>
                  </li>
                  <li>
                    <Link to="/css">project 2</Link>
                  </li>
                  <li>
                    <Link to="/css">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/js">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <Link to="/js">coming soon🔥</Link>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header
        style={{ backgroundColor: "darkslategrey" }}
        className="show-when-mobile"
      >
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/html">Full Course</Link>
              </li>
              <li>
                <Link to="/html">Crash Course</Link>
              </li>
              <li>
                <Link to="/html">learn in 1h</Link>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/css">Full Course</Link>
              </li>
              <li>
                <Link to="/css">CSS Examples</Link>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <Link to="/css">project 1</Link>
                  </li>
                  <li>
                    <Link to="/css">project 2</Link>
                  </li>
                  <li>
                    <Link to="/css">project 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <Link to="/js">coming soon🔥</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
