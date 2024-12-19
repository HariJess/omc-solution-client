import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locale/en/translation.json';
import frTranslation from './locale/fr/translation.json';

// Check localStorage for a saved language preference
// const savedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },
        lng: localStorage.getItem('language') || 'fr', // Use saved language or default to 'en'
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;