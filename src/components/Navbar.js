import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  display: flex;
  a {
    text-decoration: none;
  }
  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

const links = [
  { name: "Home", path: "/" },
  { name: "Doctors", path: "/doctors" },
  { name: "Patients", path: "/patients" },
];

function Navbar() {
  return (
    <NavUnlisted>
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <li>{link.name}</li>
        </NavLink>
      ))}
    </NavUnlisted>
  );
}

export default Navbar;
