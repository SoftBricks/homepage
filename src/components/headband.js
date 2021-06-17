import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import OnlineVhsLogo from "./onlinevhs-logo";
import ResponsiveContainer from "./responsive-container";

const Wrapper = styled.div`
  text-align: center;
  background-color: ${colors.white};
  color: ${colors.blue};
  padding: 8px 0;
  line-height: 2;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;

const StyledOnlineVhsLogo = styled(OnlineVhsLogo)`
  margin: 0 8px;
`

const Headband = () => (
  <Wrapper>
    <ResponsiveContainer>
      SoftBricks stellt am 24. & 25.6.2021 <StyledOnlineVhsLogo />
      {/* <Link href="https://www.onlinevhs.net">onlinevhs.net</Link> */} beim&nbsp;
      <Link href="https://vhsimkreisherford.de/vhs-digital/vhsbarcamp-21-online/infos/">
        #vhscamp21
      </Link>&nbsp;
      vor&nbsp;🎉
    </ResponsiveContainer>
  </Wrapper>
);

export default Headband;
