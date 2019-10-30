import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import colors from "../constants/colors";

const CloseIcon = () => (
  <svg
    fill={colors.white}
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const Banner = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.white};
  > p {
    flex: 1;
  }
`;

const BannerLink = styled(Link)`
  color: ${colors.white};

  :visited {
    color: ${colors.white5};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  :focus {
    outline: none;
  }
`;

class CookieBanner extends React.Component {
  state = {
    hideCookieBanner: true
  };
  componentDidMount() {
    this.setState({
      hideCookieBanner: localStorage.getItem("hideCookieBanner")
    });
  }
  hideCookieBanner = () => {
    localStorage.setItem("hideCookieBanner", true);
    this.setState({
      hideCookieBanner: true
    });
  };
  render() {
    return this.state.hideCookieBanner ? null : (
      <Banner>
        <p>
          Um unsere Webseite für Sie optimal zu gestalten und fortlaufend
          verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung
          der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere
          Informationen zu Cookies erhalten Sie in unserer{" "}
          <BannerLink to="datenschutz">Datenschutzerklärung</BannerLink>
        </p>
        <CloseButton
          onClick={this.hideCookieBanner}
          aria-label="Cookies akzeptieren"
        >
          <CloseIcon />
        </CloseButton>
      </Banner>
    );
  }
}

export default CookieBanner;
