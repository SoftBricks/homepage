import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import colors from "../constants/colors";
import Inline from "./inline";

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.14rem;

  :hover {
    color: ${colors.orange};
  }
`;

const Nav = () =>
  <Inline alignItems="center" scale="l">
    <NavLink to="/about">About</NavLink>
    <NavLink to="/about">Team</NavLink>
    <NavLink to="/impressum">Impressum</NavLink>
    <NavLink to="/about">Contact</NavLink>
  </Inline>;

export default Nav;
