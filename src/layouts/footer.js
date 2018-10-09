import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import SoftBricksLogo from "../components/softbricks-logo";
import ResponsiveContainer from "../components/responsive-container";
import Nav from "../components/nav";
import Text from "../components/text";
import Center from "../components/center";
import Stack from "../components/stack";
import Toolbar from "../components/toolbar";
import colors from "../constants/colors";

const FooterContainer = styled.footer`
  background-color: ${colors.black};
  padding: 32px 0;
`;
const Copyright = styled(Text.Detail)`
  padding: 32px 0 0;
  color: ${colors.white5};
`;
const DatenschutzLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white5};
  :visited {
    color: ${colors.white3};
  }
`

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <ResponsiveContainer>
          <Toolbar>
            <SoftBricksLogo />
            <div className="footer-links">
              <Nav />
            </div>
          </Toolbar>
          <Center>
            <Stack alignItems="center" scale="xl">
              <Copyright>© 2017 SoftBricks. All Rights Reserved | <DatenschutzLink to="/datenschutz">Datenschutzerklärung</DatenschutzLink></Copyright>
              <a
                href="https://www.contentful.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
                  style={{ maxWidth: 100, width: '100%' }}
                  alt="Powered by Contentful"
                />
              </a>
              </Stack>
          </Center>
        </ResponsiveContainer>
      </FooterContainer>
    );
  }
}
