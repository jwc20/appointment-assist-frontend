import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Style from
// https://styled-components.com/docs/basics#installation
const NavUnlisted = styled.ul`
  display: flex;
  background-color: rgb(37, 150, 190);
  a {
    text-decoration: none;
    padding-left: 50px
  }
  li {
    color: white;
    margin: 0 0.8rem;
    font-size: 2.3rem;
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

function NavBar() {
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

export default NavBar;
