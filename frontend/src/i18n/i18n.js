import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import translationEN from './en/translation.json'
import translationUK from './uk/translation.json'
import translationFR from './fr/translation.json'

const resources = {
    en: {translation: translationEN},
    uk: {translation: translationUK},
    fr: {translation: translationFR}
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        resources,
        interpolation: {
            escapeValue: false,
        },
    })
    .then(() => {
        console.log('i18n initialized successfully');
    })
    .catch(error => {
        console.error('Failed to initialize i18n:', error);
    });

export default i18n;