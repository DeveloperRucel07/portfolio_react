import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationDE from './de/translation.json';
import translationFR from './fr/translation.json';

const savedLanguage = localStorage.getItem('language') || 'en'
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: savedLanguage,
    interpolation: {
      escapeValue: false
    }
});

export default i18n;