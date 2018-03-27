import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import favicon from "../../public/static/favicon.ico";
import Inline from "../components/inline";
import Stack from "../components/stack";
import SoftBricksLogo from "../components/softbricks-logo";
import ResponsiveContainer from "../components/responsive-container";
import Toolbar from "../components/toolbar";
import Nav from "../components/nav";
import Footer from "./footer";
import colors from "../constants/colors";

import "./index.css";

const HorizontalBar = styled.div`
  background-color: ${colors.black};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Header = () =>
  <HorizontalBar>
    <ResponsiveContainer>
      <Toolbar>
        <SoftBricksLogo />
        <Nav />
      </Toolbar>
    </ResponsiveContainer>
  </HorizontalBar>;

const TemplateWrapper = ({ children }) =>
  <Stack scale="none">
    <Helmet
      title="Softbricks"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
        {
          name: "google-site-verification",
          content: "wt_pjO9OaKGWsP724hetEkeo-9sI_I9veo1t5ak8Liw"
        }
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
