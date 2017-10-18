import React from "react";
import Link from "gatsby-link";
import background from "../../public/static/bg2.jpeg";
import walz from "../../public/static/Versandh_Walz.png";
import otto from "../../public/static/otto.png";
import resch from "../../public/static/badw_logo_2.png";
import ludwig from "../../public/static/ludwigmedia.png";

const IndexPage = () =>
  <div>
    <div style={{ height: "50vh" }}>
      <div
        style={{
          background: `url(${background}) center center`,
          backgroundSize: "cover",
          height: "50vh",
          width: "100vw",
          padding: "0px 1.0875rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: -1
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
          height: "50vh",
          width: "100vw",
          position: "fixed"
        }}
      />
      <div className="landing-wrapper">
        <div className="landing-text text-center" style={{ padding: "2rem" }}>
          Need custom software solutions for your business?
        </div>
        <div className="landing-button">
          <button>Yes!</button>
        </div>
        <div
          className="landing-text text-center"
          style={{
            padding: "3rem 15vw"
          }}
        >
          We deliver IT - agile, dynamic and efficient
        </div>
      </div>
    </div>
    <div className="customers-list">
      <img className="customer-logo is-visible" src={otto} alt="" />

      <img className="customer-logo is-visible" src={walz} alt="" />

      <img className="customer-logo is-visible" src={ludwig} alt="" />

      <img className="customer-logo is-visible" src={resch} alt="" />
    </div>
    <div className="skills-section">
      <h3>Unsere Leistungen</h3>
      <div className="skills">
        <div className="skill is-visible">
          <h4>Service für Xinet-Systeme</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Training</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Web-Applikationen</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Web-To-Print Personalisierung</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>WebNative Anpassung</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Workflow Analyse</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>E-Commerce</h4>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae excepturi alias possimus quas dignissimos atque porro,
            aperiam culpa accusamus quibusdam consequuntur, quam asperiores
            dolorum blanditiis, voluptates labore doloribus numquam veritatis.
          </div>
        </div>
      </div>
    </div>
  </div>;

export default IndexPage;
