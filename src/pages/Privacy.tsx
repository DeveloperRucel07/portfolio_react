
const Privacy = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] p-2">
        <h1 className="title flex font-bold text-2xl md:text-3xl lg:text-5xl text-secondary mt-5 mb-5 text-center  md:text-start items-center">Datenschutzrichtlinie</h1>
        <section className="content">
            <div className="left">
                <section className="contact-information">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Kontaktinformationen</h3>
                    <ul>
                        <li>Rucel Tsafack</li>
                        <li>An der Trave 30</li>
                        <li>23795, Bad Segeberg</li>
                    </ul>
                    <p>
                        Erkundigung des Boards <br/>
                        Email: <a href="mailto:contact@developer-rucel.com" className="mail-link" >contact@developer-rucel.com</a>
                    </p>
                </section>
                <section className="data-collection">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Datenerfassung und -nutzung</h3>
                    <p>
                        Wir erfassen personenbezogene Daten, die Sie uns freiwillig übermitteln, wenn Sie uns per E-Mail kontaktieren. Zu diesen Daten können Ihr Name, Ihre E-Mail-Adresse und alle weiteren Angaben gehören, die Sie uns mitteilen möchten.
                    </p>
                    <p>
                        Die erhobenen Daten werden ausschließlich dazu verwendet, Ihre Anfragen zu beantworten und Ihnen die angeforderten Informationen oder Dienstleistungen bereitzustellen. Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, verkaufen oder verbreiten sie nicht.
                    </p>
                </section>
                <section className="data-protection-rights">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Ihre Datenschutzrechte</h3>
                    <p>
                        Sie haben das Recht, Ihre bei uns gespeicherten personenbezogenen Daten einzusehen, zu berichtigen oder zu löschen. Sie können Ihre Einwilligung zur Verarbeitung Ihrer Daten jederzeit widerrufen. Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter <a href="mailto:contact@developer-rucel.com" className="mail-link">contact@developer-rucel.com</a>.
                    </p>
                </section>
            
            </div>
            <div className="right">
                <section className="cookies">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Cookies</h3>
                    <p>
                        Diese Website verwendet weder Cookies noch andere Tracking-Technologien.
                    </p>
                </section>
                <section className="changes-to-policy">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Änderungen dieser Datenschutzrichtlinie</h3>
                    <p>
                    Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit dem aktualisierten Datum der letzten Überarbeitung veröffentlicht.
                        Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen, um sich darüber zu informieren, wie wir Ihre Daten schützen.
                    </p>
                </section>
                <section className="date">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Gültigkeitsdatum</h3>
                    <p>
                        Diese Datenschutzrichtlinie tritt am 26. Juli 2025 in Kraft.
                    </p>
                </section>
            </div>
        </section>
    </div>
  )
}

export default Privacy