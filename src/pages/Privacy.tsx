import { useTranslation } from "react-i18next"
const Privacy = () => {
    const {t} = useTranslation();
  return (
    <div className="min-h-[calc(100vh-200px)] p-2 mb-4">
        <h1 className="title flex font-bold text-2xl md:text-3xl lg:text-5xl text-secondary mt-5 mb-5 text-center  md:text-start items-center">{t("privacy.title")}</h1>
        <section className="content">
            <div className="left">
                <section className="contact-information">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("privacy.start")}</h3>
                    <ul>
                        <li>Rucel Tsafack</li>
                        <li>An der Trave 30</li>
                        <li>23795, Bad Segeberg</li>
                    </ul>
                    <p>
                        {t("privacy.board")} <br/>
                        Email: <a href="mailto:contact@developer-rucel.com" className="mail-link hover:text-secondary" >contact@developer-rucel.com</a>
                    </p>
                </section>
                <section className="data-collection">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("privacy.data_collection.title")}</h3>
                    <p>
                       {t("privacy.data_collection.content_1")}
                    </p>
                    <p>
                       {t("privacy.data_collection.content_2")}
                    </p>
                </section>
                <section className="data-protection-rights">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("privacy.right_protection.title")}</h3>
                    <p>
                       {t("privacy.right_protection.content")} <a href="mailto:contact@developer-rucel.com" className="mail-link text-secondary">contact@developer-rucel.com</a>.
                    </p>
                </section>
            
            </div>
            <div className="right">
                <section className="cookies">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">Cookies</h3>
                    <p>
                        {t("privacy.cookies.content")}
                    </p>
                </section>
                <section className="changes-to-policy">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("privacy.change_policy.title")}</h3>
                    <p>
                        {t("privacy.change_policy.content")}
                    </p>
                </section>
                <section className="date">
                    <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("privacy.update.title")}</h3>
                    <p>
                        {t("privacy.update.content")}
                    </p>
                </section>
            </div>
        </section>
    </div>
  )
}

export default Privacy