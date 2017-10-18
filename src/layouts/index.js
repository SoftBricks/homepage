import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import favicon from "../../public/static/sb.ico";

import "./index.css";

const Header = () =>
  <div
    style={{
      background: "#151517",
      position: "fixed",
      width: "100vw",
      zIndex: 10
    }}
  >
    <div
      style={{
        margin: "0 auto",
        padding: "0.5rem 0.5rem",
        height: "40px",
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
          </div>
        </Link>
        <div className="right space">
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            About
          </Link>
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Team
          </Link>
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Impressum
          </Link>
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Contact
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
      height: "100vh"
    }}
  >
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
