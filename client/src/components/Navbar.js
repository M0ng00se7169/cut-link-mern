import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
    window.location.reload(false)
  };

  return (
    <>
      <nav>
        <div
          className="nav-wrapper blue darken-1"
          style={{ padding: "0 2rem" }}
        >
          <a href="/" data-target="slide-out" className="sidenav-trigger show-on-small">
            <i className="material-icons">menu</i>
          </a>
          <span className="brand-logo">Cut Links</span>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            <li>
              <NavLink to="/links">Links</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={logoutHandler}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
        <li>
          <NavLink to="/links">Links</NavLink>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <NavLink to="/" onClick={logoutHandler}>
            Logout
          </NavLink>
        </li>
      </ul>
    </>
  );
};
