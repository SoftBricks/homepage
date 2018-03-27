import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import softbricks from "../../public/static/softbricks.svg";

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
