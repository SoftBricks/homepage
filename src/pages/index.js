import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import Center from "../components/center";
import ResponsiveContainer from "../components/responsive-container";
import Inset from "../components/inset";
import Text from "../components/text";
import background from "../../public/static/bg2.jpeg";
import VersandhausWalzLogo from "../../public/static/compressed/versandhaus-walz.png";
import OttoLogo from "../../public/static/compressed/otto.png";
import LudwigMediaLogo from "../../public/static/compressed/ludwigmedia.png";
import BadischerWeinLogo from "../../public/static/compressed/badischer-wein.png";

const customers = [
  {
    src: OttoLogo,
    alt: "Otto (GmbH & CoKG)"
  },
  {
    src: VersandhausWalzLogo,
    alt: "Versandhaus Walz"
  },
  {
    src: LudwigMediaLogo,
    alt: "LUDWIG:media gmbh"
  },
  {
    src: BadischerWeinLogo,
    alt: "Badischer Wein eKfr"
  }
];

const HeroImage = styled.div`
  height: 80vh;
  position: relative;
`;

const HeroDarkener = Center.extend`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  flex-grow: 1;
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  max-width: 600px;
  font-family: Montserrat, sans-serif;
  text-align: center;
`;

const HeroTextHighlicht = styled.span`color: rgb(251, 127, 90);`;

const CustomerContainer = ResponsiveContainer.extend`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const CustomerList = Center.extend`
  padding: 32px 0;
  background-color: hsla(13, 5%, 90%, 1);
`;

const CustomerLogo = styled.div`
  flex: 1 1 auto;
  filter: grayscale(100%);
  max-height: 60px;
  margin: 10px;
  transition: all 0.5s ease-in-out;

  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const H2 = styled.h2`
  color: rgb(251, 127, 90);
  margin: 0 0 24px;
`;
const H4 = styled.h4`
  color: rgb(81, 84, 88);
  margin: 0 0 16px;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ServiceSection = styled.div`
  background-color: hsla(13, 10%, 97%, 1);
  padding: 32px 0;
`;

const Skill = styled.div`
  background-color: white;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  text-align: left;
  color: rgb(118, 122, 129);
  animation: fadein 2s;
`;

const SkillImage = styled.div`
  height: 150px;
  background-color: #ffe6df;
  border-radius: 4px 4px 0 0;
`;

const IndexPage = ({ data }) =>
  <div>
    <HeroImage>
      <Img sizes={data.contentfulAsset.sizes} style={{ height: "80vh" }} />
      <HeroDarkener>
        <HeroText>
          Wir liefern digitale Lösungen,{" "}
          <HeroTextHighlicht>die unsere Kunden lieben.</HeroTextHighlicht>
        </HeroText>
      </HeroDarkener>
    </HeroImage>
    <CustomerList>
      <CustomerContainer>
        {customers.map(logo =>
          <CustomerLogo key={logo.alt}>
            <img src={logo.src} alt={logo.alt} />
          </CustomerLogo>
        )}
      </CustomerContainer>
    </CustomerList>
    <ServiceSection>
      <ResponsiveContainer>
        <Center>
          <H2>Unsere Leistungen</H2>
        </Center>
        <SkillGrid>
          {data.allContentfulServices.edges.map(({ node }) =>
            <Skill key={node.id}>
              <SkillImage />
              <Inset scale="xl">
                <H4>
                  {node.title}
                </H4>
                <Text.Detail>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.description.childMarkdownRemark.html
                    }}
                  />
                </Text.Detail>
              </Inset>
            </Skill>
          )}
        </SkillGrid>
      </ResponsiveContainer>
    </ServiceSection>
  </div>;

export default IndexPage;

export const query = graphql`
  query AllServices {
    allContentfulServices {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulAsset(title: { eq: "Hero" }) {
      sizes(maxHeight: 1000) {
        ...GatsbyContentfulSizes
      }
    }
  }
`;
