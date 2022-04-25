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

const StyledOnlineVhsLogo = styled(OnlineVhsLogo)`
  margin: 0 8px;
`;

const Headband = () => (
  <Wrapper>
    <ResponsiveContainer>
      Besuchen Sie unser neustes Projekt <StyledOnlineVhsLogo />
    </ResponsiveContainer>
  </Wrapper>
);

export default Headband;
