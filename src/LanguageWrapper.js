import React, { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageWrapper = ({ children }) => {
    const { i18n } = useTranslation();
    const { lng } = useParams();

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || 'en';
        const currentLanguage = lng || storedLanguage;

        if (i18n.language !== currentLanguage) {
            i18n.changeLanguage(currentLanguage);
            localStorage.setItem('language', currentLanguage); // Save language preference
        }
    }, [lng, i18n]);

    return <Outlet />;
};

export default LanguageWrapper;
