import { useTranslation } from "react-i18next"

const Legacy = () => {
    const {t} = useTranslation();
  return (
    <div className="min-h-[calc(100vh-200px)] p-2 mb-4">
        <h1 className="title flex font-bold text-2xl md:text-3xl lg:text-5xl text-secondary mt-5 mb-5 text-center  md:text-start items-center">{t("legacy.start")}</h1>

            <section className="info">
                <ul>
                    <li>Rucel Tsafack</li>
                    <li>An der Trave 30</li>
                    <li>23795, Bad Segeberg</li>
                </ul>
                <p>
                    Email: <a href="mailto:contact@developer-rucel.com" className="mail-link hover:text-secondary">contact@developer-rucel.com</a>
                </p>
            </section>
            <section className="accept-terms">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("legacy.accept_terms.title")}</h3>
                <p>
                    {t("legacy.accept_terms.content")}
                </p>
            </section>
            <section className="ownership">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("legacy.ownership.title")}</h3>
                <p>
                    {t("legacy.ownership.content")}
                </p>
            </section>
            <section className="proprietary-right">
                <h3 className="font-medium text-lg md:text-xl text-secondary mt-2 mb-2">{t("legacy.proprietary.title")}</h3>
                <p> 
                  {t("legacy.proprietary.content")}  
                </p>
            </section>
       
    </div>
  )
}

export default Legacy