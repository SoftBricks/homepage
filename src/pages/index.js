import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Center from "../components/center";
import ResponsiveContainer from "../components/responsive-container";
import Inset from "../components/inset";
import Text from "../components/text";
import background from "../../public/static/bg2.jpeg";
import walz from "../../public/static/Versandh_Walz.png";
import otto from "../../public/static/otto.png";
import resch from "../../public/static/badw_logo_2.png";
import ludwig from "../../public/static/ludwigmedia.png";

const HeroImage = styled.div`
  min-height: 80vh;
  background: url(${background}) center center;
  background-size: cover;
  max-width: 100%;
  display: flex;
  alignItems: stretch;
`;

const HeroDarkener = Center.extend`
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
`

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

const IndexPage = () =>
  <div>
    <HeroImage>
      <HeroDarkener>
        <HeroText>
          Wir liefern digitale Lösungen,{" "}
          <HeroTextHighlicht>die unsere Kunden lieben.</HeroTextHighlicht>
        </HeroText>
      </HeroDarkener>
    </HeroImage>
    <CustomerList>
      <CustomerContainer>
        <CustomerLogo>
          <img src={otto} alt="Otto Versand" />
        </CustomerLogo>

        <CustomerLogo>
          <img src={walz} alt="Versandhaus Walz" />
        </CustomerLogo>

        <CustomerLogo>
          <img src={ludwig} alt="Repro Ludwig" />
        </CustomerLogo>

        <CustomerLogo>
          <img src={resch} alt="Badischer Wein eKfr" />
        </CustomerLogo>
      </CustomerContainer>
    </CustomerList>
    <ServiceSection>
      <ResponsiveContainer>
        <Center>
          <H2>Unsere Leistungen</H2>
        </Center>
        <SkillGrid>
          <Skill>
            <SkillImage />
            <Inset scale="xl">
              <H4>Service für Xinet-Systeme</H4>
              <Text.Detail>
                <p>
                  Sie arbeiten auf XINET-Basis, doch ihnen fehlen technische
                  Ressourcen? Sie müssen Ihr System für einen neuen Kunden
                  einrichten, aber Ihr Administrator ist im Urlaub? Ein
                  plötzlich auftretendes Problem kostet Sie Zeit und Nerven und
                  Sie bräuchten dringend Hilfe?
                </p>
                <p>
                  Dann greifen Sie doch einfach auf uns zurück. Wir helfen
                  gerne. In Sachen XINET können wir Ihnen ein profundes, über
                  Jahre gewachsenes, exzellentes technisches Know-How zur
                  Verfügung stellen. Schnell, unkompliziert, effizient und
                  völlig unabhängig von der Plattform auf der Sie XINET
                  einsetzen. Ganz einfach via Internet oder auch, wenn
                  gewünscht, bei Ihnen vor Ort.
                </p>
              </Text.Detail>
            </Inset>
          </Skill>

          <Skill>
            <SkillImage />
            <Inset scale="xl">
              <H4>Web-Applikationen</H4>
              <Text.Detail>
                <p>
                  Sie wollen das Handling Ihres Database-Publishings optimieren?
                  Sie benötigen eine Textdatenbank, die Bilder und Grafiken mit
                  einer automatisierten Verschlagwortung, sprich: Metadaten
                  versieht? Um deren Inhalte schnell und einfach in ein offenes
                  Layoutdokument integrieren zu können, das sich bei Änderungen
                  automatisch aktualisiert? Sie möchten die Kommunikation mit
                  Ihren Kunden optimieren? Um schnell und adäquat auf deren
                  Wünsche und auf eventuelle Veränderungen reagieren zu können?
                  Sie benötigen eine umfangreiche Web-Applikation, die Abläufe
                  präzise darstellt und dokumentiert?
                </p>
                <p>
                  In all diesen Fällen sollten Sie mit uns sprechen. Wir
                  beherrschen die relevanten Programmiersprachen und sind in
                  sämtlichen Technologien zuhause, die uns Ihre Vorstellungen
                  effizient und professionell realisieren lassen.
                </p>
              </Text.Detail>
            </Inset>
          </Skill>

          <Skill>
            <SkillImage />
            <Inset scale="xl">
              <H4>Training</H4>
              <Text.Detail>
                <p>
                  Sie wollen Ihre administrative Zukunft selbst „in die Hand
                  nehmen?“ Ihr XINET-System selbst betreuen und anpassen?
                  WebNative soll schnell an die Bedürfnisse Ihrer Kunden
                  angepasst werden, und Sie möchten das gern selbst übernehmen?
                  Sie wollen sich mit Vorteilen und Nutzen des XINET -Systems
                  intensiv vertraut machen und wünschen eine Einführung in die
                  Möglichkeiten der Programmierung?
                </p>
                <p>
                  Profitieren Sie doch von unserer jahrelangen Erfahrung und
                  buchen Sie ein Training bei uns. Standard oder
                  maßgeschneidert, ganz wie Sie wünschen. Bei uns erwartet Sie
                  nicht nur trockene Theorie; interessante und wertvolle
                  praktische Übungen bringen Ihnen XINET buchstäblich „zum
                  Greifen“ nahe.
                </p>
                <p>Unter anderem bieten wir folgende Trainingseinheiten an:</p>
                <ul>
                  <li>Administrations-Training für XINET FulPress</li>
                  <li>Administrations-Training für XINET WebNative</li>
                  <li>
                    Administrations-Training für XINET WebNative Venture inkl.
                    „Triggers and Actions“
                  </li>
                  <li>Training Designanpassung WebNative</li>
                  <li>
                    Trainng PHP Programmierung für WebNative Venture, inkl.
                    Erklärung der Venture-Datenbank
                  </li>
                  <li>Inpress Accerlerator Training</li>
                </ul>
              </Text.Detail>
            </Inset>
          </Skill>

          <Skill>
            <SkillImage />
            <Inset scale="xl">
              <H4>WebNative Anpassung</H4>
              <Text.Detail>
                <p>
                  Sie arbeiten mit XINET, nutzen es noch nicht in vollem Umfang,
                  würden es aber gern tun?<br /> Ihre Kunden sind prinzipiell
                  von WebNative beeindruckt, könnten sich aber eine Verbesserung
                  der Oberfläche oder eine individuellere Anpassung vorstellen?<br />{" "}
                  Die Basisfunktionen von WebNative begeistern Sie, doch Sie
                  wünschen sich speziellere Funktionen für Ihren Kunden?
                </p>
                <p>
                  Alles kein Problem. Denn XINET ist wunderbar flexibel. Ob Sie
                  eine Anpassung des Designs wünschen, Ergänzungen bzw.
                  Änderungen in der Funktionalität vornehmen wollen oder ob
                  Anpassungen, die der Automatisierung von Abläufen dienen, auf
                  Ihrer Wunschliste stehen – Ihren Vorstellungen sind (fast)
                  keine Grenzen gesetzt.
                </p>
                <p>
                  Sie wissen nicht, wie Sie diese realisieren können? Sie
                  benötigen einen „Lotsen“ für Ihr XINET WebNative? Dann wenden
                  Sie sich vertrauensvoll an uns. Wir helfen gerne weiter.
                  Entweder wir bearbeiten Ihr XINET WebNative gemäß Ihren
                  Vorstellungen, oder aber wir schulen Sie und zeigen Ihnen, wie
                  Sie selbst aktiv werden können, um XINET WebNative Ihren
                  individuellen Wünschen anzupassen.
                </p>
              </Text.Detail>
            </Inset>
          </Skill>

          <Skill>
            <SkillImage />
            <Inset scale="xl">
              <H4>Workflow Analyse</H4>
              <Text.Detail>
                <p>
                  Sie möchten Ihren Produktionsablauf effektiver gestalten?<br />
                  Ihnen fehlt die Übersicht über einzelne Abläufe innerhalb
                  Ihres Unternehmens? Sie wollen wissen, welches
                  Einsparungspotenzial in Ihrer Produktion steckt?
                </p>
                <p>
                  Dann sind Sie bei SoftBricks an der richtigen Adresse. Wir
                  analysieren Ihre Produktionsprozesse und protokollieren diese
                  mit einem Ablaufdiagramm. Um möglichst nah am Geschehen zu
                  sein und eine genaue Übersicht über Ihr mögliches
                  Einsparpotenzial zu bekommen, begleiten wir Ihre Mitarbeiter
                  bei ihren Aufgaben.
                </p>
                <p>
                  Mittels eines von uns speziell entwickelten Zeitaufnahmebogens
                  dokumentieren wir sämtliche Abläufe und schaffen so die
                  Voraussetzung, Schritte zu erkennen, die sich optimieren
                  lassen. Interviews mit Mitarbeitern der verschiedenen
                  Abteilungen sowie der am Prozess beteiligten Firmen bieten
                  weitere wertvolle Erkenntnisse, die in die Analyse
                  miteinfließen. Am Schluss steht ein fundiertes Gutachten, das
                  Schwachpunkte benennt und Entwicklungsmöglichkeiten darstellt.
                </p>
              </Text.Detail>
            </Inset>
          </Skill>

          <Skill>
            <SkillImage />
            <Inset scale="xl">
              <H4>E-Commerce</H4>
              <Text.Detail>
                <p>
                  Sie wollen Ihren Internet-Shop optimieren? Sie möchten die
                  automatische Übernahme von Daten aus dem
                  Warenwirtschaftssystem in Ihr Shopsystem integrieren? Bilder
                  sollen automatisch den entsprechenden Artikeln zugeordnet
                  werden? Sie wollen auf Veränderungen im Marktgeschehen schnell
                  und sicher reagieren? Daten aus Ihrem Warenwirtschaftssystem
                  sollen automatisch mit den jeweils aktuellen Marketingdaten
                  „verschmelzen“ und Ihren Shop so immer auf dem aktuellsten
                  Stand halten? Sie suchen einen kompetenten Partner, der diese
                  und andere Optimierungen vornimmt und Ihren Shop technisch
                  zuverlässig betreut?
                </p>
                <p>
                  Wir von SoftBricks verfügen über langjährige Erfahrung im
                  Bereich der automatischen Verknüpfung komplexer Daten auch auf
                  dem E-Commerce-Sektor. Gerne erarbeiten wir ein zuverlässiges
                  und effizientes Konzept auch für Ihren Shop.
                </p>
              </Text.Detail>
            </Inset>
          </Skill>
        </SkillGrid>
      </ResponsiveContainer>
    </ServiceSection>
  </div>;

export default IndexPage;
