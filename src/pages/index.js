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
            Sie arbeiten auf XINET-Basis, doch ihnen fehlen technische
            Ressourcen?<br /> Sie müssen Ihr System für einen neuen Kunden
            einrichten, aber Ihr Administrator ist im Urlaub?<br /> Ein
            plötzlich auftretendes Problem kostet Sie Zeit und Nerven und Sie
            bräuchten dringend Hilfe?<br /> Dann greifen Sie doch einfach auf
            uns zurück. Wir helfen gerne. In Sachen XINET können wir Ihnen ein
            profundes, über Jahre gewachsenes, exzellentes technisches Know-How
            zur Verfügung stellen. Schnell, unkompliziert, effizient und völlig
            unabhängig von der Plattform auf der Sie XINET einsetzen. Ganz
            einfach via Internet oder auch, wenn gewünscht, bei Ihnen vor Ort.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Training</h4>
          <div className="desc">
            Sie wollen Ihre administrative Zukunft selbst „in die Hand nehmen?“<br />
            Ihr XINET-System selbst betreuen und anpassen?<br /> WebNative soll
            schnell an die Bedürfnisse Ihrer Kunden angepasst werden, und Sie
            möchten das gern selbst übernehmen?<br /> Sie wollen sich mit
            Vorteilen und Nutzen des XINET -Systems intensiv vertraut machen und
            wünschen eine Einführung in die Möglichkeiten der Programmierung?<br />{" "}
            Profitieren Sie doch von unserer jahrelangen Erfahrung und buchen
            Sie ein Training bei uns. Standard oder maßgeschneidert, ganz wie
            Sie wünschen.<br /> Bei uns erwartet Sie nicht nur trockene Theorie;
            interessante und wertvolle praktische Übungen bringen Ihnen XINET
            buchstäblich „zum Greifen“ nahe.<br /> Unter anderem bieten wir
            folgende Trainingseinheiten an:<br /> • Administrations-Training für
            XINET FulPress<br /> • Administrations-Training für XINET WebNative<br />{" "}
            • Administrations-Training für XINET WebNative Venture inkl.
            „Triggers and Actions“<br /> • Training Designanpassung WebNative<br />{" "}
            • Trainng PHP Programmierung für WebNative Venture, inkl. Erklärung
            der Venture-Datenbank<br /> • Inpress Accerlerator Training
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Web-Applikationen</h4>
          <div className="desc">
            Sie wollen das Handling Ihres Database-Publishings optimieren? Sie
            benötigen eine Textdatenbank, die Bilder und Grafiken mit einer
            automatisierten Verschlagwortung, sprich: Metadaten versieht?<br />
            Um deren Inhalte schnell und einfach in ein offenes Layoutdokument
            integrieren zu können, das sich bei Änderungen automatisch
            aktualisiert?<br /> Sie möchten die Kommunikation mit Ihren Kunden
            optimieren?<br /> Um schnell und adäquat auf deren Wünsche und auf
            eventuelle Veränderungen reagieren zu können?<br /> Sie benötigen
            eine umfangreiche Web-Applikation, die Abläufe präzise darstellt und
            dokumentiert?<br /> In all diesen Fällen sollten Sie mit uns
            sprechen. Wir beherrschen die relevanten Programmiersprachen und
            sind in sämtlichen Technologien zuhause, die uns Ihre Vorstellungen
            effizient und professionell realisieren lassen.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>WebNative Anpassung</h4>
          <div className="desc">
            Sie arbeiten mit XINET, nutzen es noch nicht in vollem Umfang,
            würden es aber gern tun?<br /> Ihre Kunden sind prinzipiell von
            WebNative beeindruckt, könnten sich aber eine Verbesserung der
            Oberfläche oder eine individuellere Anpassung vorstellen?<br /> Die
            Basisfunktionen von WebNative begeistern Sie, doch Sie wünschen sich
            speziellere Funktionen für Ihren Kunden?<br /> Alles kein Problem.
            Denn XINET ist wunderbar flexibel. Ob Sie eine Anpassung des Designs
            wünschen, Ergänzungen bzw. Änderungen in der Funktionalität
            vornehmen wollen oder ob Anpassungen, die der Automatisierung von
            Abläufen dienen, auf Ihrer Wunschliste stehen – Ihren Vorstellungen
            sind (fast) keine Grenzen gesetzt.<br /> Sie wissen nicht, wie Sie
            diese realisieren können? Sie benötigen einen „Lotsen“ für Ihr XINET
            WebNative? Dann wenden Sie sich vertrauensvoll an uns. Wir helfen
            gerne weiter. Entweder wir bearbeiten Ihr XINET WebNative gemäß
            Ihren Vorstellungen, oder aber wir schulen Sie und zeigen Ihnen, wie
            Sie selbst aktiv werden können, um XINET WebNative Ihren
            individuellen Wünschen anzupassen.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>Workflow Analyse</h4>
          <div className="desc">
            Sie möchten Ihren Produktionsablauf effektiver gestalten?<br />
            Ihnen fehlt die Übersicht über einzelne Abläufe innerhalb Ihres
            Unternehmens?<br /> Sie wollen wissen, welches Einsparungspotenzial
            in Ihrer Produktion steckt?<br /> Dann sind Sie bei SoftBricks an
            der richtigen Adresse. Wir analysieren Ihre Produktionsprozesse und
            protokollieren diese mit einem Ablaufdiagramm. Um möglichst nah am
            Geschehen zu sein und eine genaue Übersicht über Ihr mögliches
            Einsparpotenzial zu bekommen, begleiten wir Ihre Mitarbeiter bei
            ihren Aufgaben. Mittels eines von uns speziell entwickelten
            Zeitaufnahmebogens dokumentieren wir sämtliche Abläufe und schaffen
            so die Voraussetzung, Schritte zu erkennen, die sich optimieren
            lassen. Interviews mit Mitarbeitern der verschiedenen Abteilungen
            sowie der am Prozess beteiligten Firmen bieten weitere wertvolle
            Erkenntnisse, die in die Analyse miteinfließen. Am Schluss steht ein
            fundiertes Gutachten, das Schwachpunkte benennt und
            Entwicklungsmöglichkeiten darstellt.
          </div>
        </div>

        <div className="skill is-visible">
          <h4>E-Commerce</h4>
          <div className="desc">
            Sie wollen Ihren Internet-Shop optimieren?<br /> Sie möchten die
            automatische Übernahme von Daten aus dem Warenwirtschaftssystem in
            Ihr Shopsystem integrieren?<br /> Bilder sollen automatisch den
            entsprechenden Artikeln zugeordnet werden?<br /> Sie wollen auf
            Veränderungen im Marktgeschehen schnell und sicher reagieren?<br />{" "}
            Daten aus Ihrem Warenwirtschaftssystem sollen automatisch mit den
            jeweils aktuellen Marketingdaten „verschmelzen“ und Ihren Shop so
            immer auf dem aktuellsten Stand halten?<br /> Sie suchen einen
            kompetenten Partner, der diese und andere Optimierungen vornimmt und
            Ihren Shop technisch zuverlässig betreut?<br /> Wir von SoftBriks
            verfügen über langjährige Erfahrung im Bereich der automatischen
            Verknüpfung komplexer Daten auch auf dem E-Commerce-Sektor. Gerne
            erarbeiten wir ein zuverlässiges und effizientes Konzept auch für
            Ihren Shop.
          </div>
        </div>
      </div>
    </div>
  </div>;

export default IndexPage;
