import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { LANGUAGES } from '../../helpers/twosky';
import i18n from '../../i18n';

import Version from './Version';
import './Footer.css';
import './Select.css';

import { setHtmlLangAttr } from '../../helpers/helpers';

const linksData = [
    {
        href: 'https://www.desmg.com',
        name: 'homepage',
    },
    {
        href: 'https://www.desmg.com/policies/privacy',
        name: 'privacy_policy',
    }
];

const Footer = () => {
    const { t } = useTranslation();

    const getYear = () => {
        const today = new Date();
        return today.getFullYear();
    };

    const changeLanguage = (event: any) => {
        const { value } = event.target;
        i18n.changeLanguage(value);
        setHtmlLangAttr(value);
    };

    const renderCopyright = () => (
        <div className="footer__column">
            <div className="footer__copyright">
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                Copyright &copy; {getYear()}{' '} <b><a target="_blank" href="https://www.desmg.com">DESMG</a></b> All Rights Reserved.
            </div>
        </div>
    );

    const renderLinks = (linksData: any) =>
        linksData.map(({ name, href, className = '' }: any) => (
            <a
                key={name}
                href={href}
                className={cn('footer__link', className)}
                target="_blank"
                rel="noopener noreferrer">
                {t(name)}
            </a>
        ));
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__column footer__column--links">{renderLinks(linksData)}</div>

                        <div className="footer__column footer__column--language">
                            <select
                                className="form-control select select--language"
                                value={i18n.language}
                                onChange={changeLanguage}>
                                {Object.keys(LANGUAGES).map((lang) => (
                                    <option key={lang} value={lang}>
                                        {LANGUAGES[lang]}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer">
                <div className="container">
                    <div className="footer__row">
                        {renderCopyright()}

                        <div className="footer__column footer__column--language">
                            <Version />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
