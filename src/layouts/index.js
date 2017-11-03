import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import favicon from "../../public/static/sb.ico";
import Inline from "../components/inline";
import Stack from "../components/stack";
import ResponsiveContainer from "../components/responsive-container";
import Toolbar from "../components/toolbar";
import Footer from "./footer";

import "./index.css";

const colors = {
  orange: "rgb(251, 127, 90)"
};

const HorizontalBar = styled.div`
  background-color: #151517;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.14rem;

  :hover {
    color: ${colors.orange};
  }
`;

const LogoLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const SoftBricksLogo = () =>
  <div className="logo">
    <div className="logo-text">SoftBricks</div>
    <div className="logo-icon">
      <div className="row">
        <div />
      </div>
      <div className="row">
        <div />
        <div />
      </div>
      <div className="row">
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>;

const Header = () =>
  <HorizontalBar>
    <ResponsiveContainer>
      <Toolbar>
        <LogoLink to="/">
          <SoftBricksLogo />
        </LogoLink>
        <Inline alignItems="center" scale="l">
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/about">Team</HeaderLink>
          <HeaderLink to="/impressum">Impressum</HeaderLink>
          <HeaderLink to="/about">Contact</HeaderLink>
        </Inline>
      </Toolbar>
    </ResponsiveContainer>
  </HorizontalBar>;

const TemplateWrapper = ({ children }) =>
  <Stack scale="none">
    <Helmet
      title="Softbricks"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </Stack>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
