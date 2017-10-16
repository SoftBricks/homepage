import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import logo from "./sb-logo.png";

import "./index.css";

const Header = () =>
  <div
    style={{
      background: "rgba(43, 65, 98, 1)"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "0.5rem 0.5rem",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "70vw",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <img width="25%" src={logo} alt="Logo" />
        </Link>
        <div className="right">
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  </div>;

const TemplateWrapper = ({ children }) =>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "rgba(43, 65, 98, 1)"
    }}
  >
    <Helmet
      title="Softbricks"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div>
      <div
        style={{
          margin: "0 auto",
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </div>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
