import React from "react";
import styled from "styled-components";
import ResponsiveContainer from "../components/responsive-container";
import Layout from "../layouts";

const ImpressumContent = styled.div`
  margin: 0 0 32px;
`;

const Impressum = () => (
  <Layout>
    <div>
      <ResponsiveContainer>
        <h2>Impressum</h2>
        <ImpressumContent>
          <p>
            <strong>SoftBricks Stefan Sporrer </strong>
          </p>
          <p>
            <strong>Stefan Sporrer</strong>
            <br />
            Lindberghstr. 18
            <br />
            80939 München
            <br />
            Deutschland
          </p>
          <p>
            Tel.: +49 (0) 89 549998 700
            <br />
            E-Mail:
            <a href="mailto:info@softbricks.de">info@softbricks.de</a>
          </p>
          <p>
            <noscript />
          </p>
          <p>
            <strong>Bankverbindung:</strong>
            <br />
            Sparkasse Erding-Dorfen
            <br />
            IBAN: DE20 7005 1995 0000 5891 50
            <br />
            BIC: BYLADEM1ERD
          </p>
          <p>Umsatzst. ID (VAT) : DE173110048</p>
          <p>
            <strong>Haftungsausschluss</strong>
            <br />
            1. Inhalt des Onlineangebotes von SoftBricks Stefan Sporrer
            SoftBricks Stefan Sporrer übernimmt keinerlei Gewähr für die
            Aktualität, Korrektheit, Vollständigkeit oder Qualität der
            bereitgestellten Informationen. Haftungsansprüche gegen SoftBricks
            Stefan Sporrer, welche sich auf Schäden materieller oder ideeller
            Art beziehen, die durch die Nutzung oder Nichtnutzung der
            dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und
            unvollständiger Informationen verursacht wurden, sind grundsätzlich
            ausgeschlossen, sofern seitens SoftBricks Stefan Sporrer kein
            nachweislich vorsätzliches oder grob fahrlässiges Verschulden
            vorliegt. Alle Angebote sind freibleibend und unverbindlich.
            SoftBricks Stefan Sporrer behält es sich ausdrücklich vor, Teile der
            Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu
            verändern, zu ergänzen, zu löschen oder die Veröffentlichung
            zeitweise oder endgültig einzustellen.
          </p>
          <p>
            2. Verweise und Links Bei direkten oder indirekten Verweisen auf
            fremde Internetseiten (”Links”), die außerhalb des
            Verantwortungsbereiches des Autors liegen, würde eine
            Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in
            dem SoftBricks Stefan Sporrer von den Inhalten Kenntnis hat und es
            ihm technisch möglich und zumutbar wäre, die Nutzung im Falle
            rechtswidriger Inhalte zu verhindern. SoftBricks Stefan Sporrer
            erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung
            keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar
            waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder
            die Urheberschaft der gelinkten/verknüpften Seiten hat SoftBricks
            Stefan Sporrer keinerlei Einfluss. Deshalb distanziert er sich
            hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften
            Seiten, die nach der Linksetzung verändert wurden. Diese
            Feststellung gilt für alle innerhalb des eigenen Internetangebotes
            gesetzten Links und Verweise sowie für Fremdeinträge in von
            SoftBricks Stefan Sporrer eingerichteten Gästebüchern,
            Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder
            unvollständige Inhalte und insbesondere für Schäden, die aus der
            Nutzung oder Nichtnutzung solcherart dargebotener Informationen
            entstehen, haftet allein der Anbieter der Seite, auf welche
            verwiesen wurde, nicht derjenige, der über Links auf die jeweilige
            Veröffentlichung lediglich verweist.
          </p>
          <p>
            3. Urheber- und Kennzeichenrecht SoftBricks Stefan Sporrer ist
            bestrebt, in allen Publikationen die Urheberrechte der verwendeten
            Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von
            ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und
            Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente,
            Videosequenzen und Texte zurückzugreifen. Alle innerhalb des
            Internetangebotes genannten und ggf. durch Dritte geschützten
            Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung ist nicht der Schluß zu ziehen, dass
            Markenzeichen nicht durch Rechte Dritter geschützt sind! Das
            Copyright für veröffentlichte, von SoftBricks Stefan Sporrer selbst
            erstellte Objekte bleibt allein bei SoftBricks Stefan Sporrer. Eine
            Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente,
            Videosequenzen und Texte in anderen elektronischen oder gedruckten
            Publikationen ist ohne ausdrückliche Zustimmung von SoftBricks
            Stefan Sporrer nicht gestattet.
          </p>
          <p>
            4. Datenschutz Sofern innerhalb des Internetangebotes die
            Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten
            (Emailadressen, Namen, Anschriften) besteht, so erfolgt die
            Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich
            freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller
            angebotenen Dienste ist - soweit technisch möglich und zumutbar -
            auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter
            Daten oder eines Pseudonyms gestattet.
          </p>
          <p>
            5. Rechtswirksamkeit dieses Haftungsausschlusses Dieser
            Haftungsausschluss ist als Teil des Internetangebotes zu betrachten,
            von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder
            einzelne Formulierungen dieses Textes der geltenden Rechtslage
            nicht, nicht mehr oder nicht vollständig entsprechen sollten,
            bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer
            Gültigkeit davon unberührt.
          </p>
        </ImpressumContent>
      </ResponsiveContainer>
    </div>
  </Layout>
);

export default Impressum;
