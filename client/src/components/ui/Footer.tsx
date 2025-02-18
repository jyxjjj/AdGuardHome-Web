import React from 'react';
import cn from 'classnames';

import { LANGUAGES } from '../../helpers/twosky';
import i18n from '../../i18n';

import Version from './Version';
import './Footer.css';
import './Select.css';

import { setHtmlLangAttr } from '../../helpers/helpers';

const Footer = () => {
    const getYear = () => {
        const today = new Date();
        return today.getFullYear();
    };

    const changeLanguage = (event: any) => {
        const { value } = event.target;
        i18n.changeLanguage(value);
        setHtmlLangAttr(value);
    };

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__column footer__column--links">
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a
                                key='Home'
                                href='https://www.desmg.com'
                                className={cn('footer__link', '')}
                                target="_blank">
                                Home
                            </a>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a
                                key='Privacy'
                                href='https://www.desmg.com/policies/privacy'
                                className={cn('footer__link', '')}
                                target="_blank">
                                Privacy
                            </a>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a
                                key='Terms'
                                href='https://www.desmg.com/policies/terms'
                                className={cn('footer__link', '')}
                                target="_blank">
                                Terms
                            </a>
                            <a
                                key='GitHub'
                                href='https://github.com/jyxjjj/AdGuardHome-Web'
                                className={cn('footer__link', '')}
                                target="_blank"
                                rel="noreferrer">
                                GitHub
                            </a>
                        </div>

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

                        <div className="footer__column">
                            <div className="footer__copyright">
                                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                Copyright &copy; {getYear()}{' '} <b><a target="_blank" href="https://www.desmg.com">DESMG</a></b> All Rights Reserved.
                            </div>
                        </div>

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
