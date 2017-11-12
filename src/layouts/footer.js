import React, { Component } from "react";
import styled from "styled-components";
import SoftBricksLogo from "../components/softbricks-logo";
import ResponsiveContainer from "../components/responsive-container";
import Nav from "../components/nav";
import Text from "../components/text";
import Center from "../components/center";
import Inset from "../components/inset";
import colors from "../constants/colors";

const FooterContainer = styled.footer`
  background-color: ${colors.black};
  padding: 32px 0;
`;
const FooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Copyright = styled(Text.Detail)`
  padding: 32px 0 0;
  color: ${colors.white5};
`

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <ResponsiveContainer>
          <FooterLayout>
            <SoftBricksLogo />
            <div className="footer-links">
              <Nav />
            </div>
          </FooterLayout>
          <Center>
            <Copyright>© 2017 SoftBricks. All Rights Reserved</Copyright>
          </Center>
        </ResponsiveContainer>
      </FooterContainer>
    );
  }
}
