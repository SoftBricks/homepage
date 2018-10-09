import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
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
    <NavLink to="/impressum">Impressum</NavLink>
  </Inline>;

export default Nav;
