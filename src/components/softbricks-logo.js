import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import softbricks from "../assets/softbricks.svg";

const LogoLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const SoftBricksLogo = () =>
  <LogoLink to="/">
    <div className="logo">
      <img height={22} src={softbricks} alt="Softbricks" />
    </div>
  </LogoLink>;

export default SoftBricksLogo;
