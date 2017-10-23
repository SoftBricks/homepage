import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer">
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
            <div className="footer-links">
              <nav>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">Impressum</a>
              </nav>
              <div className="copyright">All content copyright 2015</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
