import React from "react";
import Link from "gatsby-link";
import background from "../../public/static/wood.jpg";

const IndexPage = () =>
  <div>
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "50vh",
        backgroundSize: "100% auto",
        padding: "0px 1.0875rem 1.45rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="landing-text text-center" style={{ padding: "2rem" }}>
        Need custom software solutions for your business?
      </div>
      <button className="landing-button">Yes!</button>
    </div>
    <div
      className="landing-text text-center"
      style={{
        padding: "3rem 15vw"
      }}
    >
      We deliver IT - agile, dynamic and efficient
    </div>
  </div>;

export default IndexPage;
