import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langDetect from 'i18next-browser-languagedetector';

import { BASE_LOCALE, LANGUAGES } from './helpers/twosky';

import en from './__locales/en.json';
import zhCN from './__locales/zh-cn.json';

import { setHtmlLangAttr } from './helpers/helpers';

const resources = {
    en: { translation: en },
    'zh-cn': { translation: zhCN },
};

const availableLanguages = Object.keys(LANGUAGES);

i18n.use(langDetect)
    .use(initReactI18next)
    .init(
        {
            resources,
            lowerCaseLng: true,
            fallbackLng: BASE_LOCALE,
            keySeparator: false,
            nsSeparator: false,
            returnEmptyString: false,
            interpolation: {
                escapeValue: false,
            },
            react: {
                wait: true,
            },
            whitelist: availableLanguages,
        },
        () => {
            if (!availableLanguages.includes(i18n.language)) {
                i18n.changeLanguage(BASE_LOCALE);
            }
            setHtmlLangAttr(i18n.language);
        },
    );

export default i18n;
