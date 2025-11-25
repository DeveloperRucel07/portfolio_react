

const Legacy = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] p-2">
        <h1 className="title flex font-bold text-2xl md:text-3xl lg:text-5xl text-secondary mt-5 mb-5 text-center  md:text-start items-center">Impressum</h1>
        <div className="left">
            <section className="info">
                <ul>
                    <li>Rucel Tsafack</li>
                    <li>An der Trave 30</li>
                    <li>23795, Bad Segeberg</li>
                </ul>
                <p>
                    Exploring the Board <br/>
                    Email: <a href="mailto:contact@developer-rucel.com" className="mail-link hover:text-secondary">contact@developer-rucel.com</a>
                </p>
            </section>
            <section className="accept-terms">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Annahme der Bedingungen</h3>
                <p>
                    Durch den Zugriff auf und die Nutzung dieser Website erklären Sie sich mit den Bedingungen dieser Vereinbarung einverstanden.
                    Bei der Nutzung bestimmter Dienste dieser Website gelten zusätzlich die jeweils veröffentlichten Richtlinien und Regeln.
                    Jede Teilnahme an diesem Dienst setzt die Annahme dieser Vereinbarung voraus.
                    Wenn Sie den oben genannten Bedingungen nicht zustimmen, nutzen Sie diesen Dienst bitte nicht.
                </p>
            </section>
            <section className="ownership">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Umfang und Eigentumsrechte des Produkts</h3>
                <p>
                    Portfolio wurde im Rahmen eines studentischen Gruppenprojekts in einem Webentwicklungs-Bootcamp der <span className="text-secondary">Developer Akademie GmbH</span> entwickelt.
                    Es dient ausschließlich Bildungszwecken und ist nicht für den umfassenden privaten und geschäftlichen Gebrauch bestimmt.
                    Daher können wir keine ständige Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder sonstige Qualitätsmerkmale dieses Produkts garantieren.
                    Das Design von Portfolio ist Eigentum der <span className="text-secondary">Developer Akademie GmbH</span>. Unerlaubte Nutzung, Vervielfältigung, Änderung, Verbreitung oder Reproduktion des Designs ist strengstens untersagt.
                </p>
            </section>
            <section className="proprietary-right">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Eigentumsrechte</h3>
            <p> 
                    Abgesehen vom Design, das der <span className="text-secondary">Developer Akademie GmbH</span>  gehört, behalten wir, die aufgeführten Studierenden, alle Eigentumsrechte am Portfolio,
                    einschließlich aller zugehörigen urheberrechtlich geschützten Materialien, Marken und sonstigen geschützten Informationen.
                </p>
            </section>
        </div>
        <div className="right" id="next-notice">
            <section className="use-product">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Verwendung des Produkts</h3>
                <p>
                    <span className="text-secondary">Portfolio</span> darf ausschließlich für rechtmäßige Zwecke und in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften genutzt werden. 
                    Jegliche Nutzung von <span className="text-secondary">Portfolio</span> für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist strengstens untersagt. 
                    Sie tragen die alleinige Verantwortung für Ihre Interaktionen mit anderen Nutzern von <span className="text-secondary">Portfolio</span>.
                </p>
            </section>
            <section className="disclaimer">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Gewährleistungsausschluss und Haftungsbeschränkung</h3>
                <p>
                    Das <span className="text-secondary">Portfolio</span> wird ohne jegliche Gewährleistung, weder ausdrücklich noch stillschweigend, bereitgestellt.
                    Dies schließt insbesondere die Gewährleistung der Handelsüblichkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter aus.
                    Wir, die aufgeführten Studierenden und die Developer Akademie haften in keinem Fall für direkte, indirekte, zufällige, besondere, Folgeschäden oder Strafschadenersatz,
                    einschließlich, aber nicht beschränkt auf
                    Schadenersatz für entgangenen Gewinn, Verlust des Firmenwerts, Nutzungsausfall, Datenverlust oder sonstige immaterielle Verluste, selbst wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden,
                    die aus der Nutzung oder der Leistung des Portfolios entstehen oder damit in Zusammenhang stehen.
                </p>
            </section>
            <section className="indemnity">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Entschädigung</h3>
                <p>
                    Sie verpflichten sich, uns, die aufgeführten Studenten, die Developer Akademie sowie unsere verbundenen Unternehmen, Partner, Führungskräfte, Direktoren, Vertreter und Mitarbeiter von jeglichen Ansprüchen, Forderungen, Verlusten, Schäden, Kosten oder Haftungen (einschließlich angemessener Anwaltskosten) freizustellen, zu verteidigen und schadlos zu halten, die sich aus Ihrer Nutzung von Portfolio und/oder Ihrem Verstoß gegen diesen Rechtshinweis ergeben oder damit in Zusammenhang stehen.
                </p>

                <p className="question">Bei Fragen oder Mitteilungen kontaktieren Sie uns bitte unter <span className="text-secondary">contact@developer-rucel.com</span> </p>
                <p className="date">
                    Date: July 26, 2025
                </p>
            </section> 
        </div>
    </div>
  )
}

export default Legacy