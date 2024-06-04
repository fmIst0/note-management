import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <header>
            <Link to="/" className="title-link">
                <h1>{t('Notes')}</h1>
            </Link>
            <div className="language-buttons">
                <button onClick={() => changeLanguage('en')}>EN</button>
                <button onClick={() => changeLanguage('uk')}>UA</button>
                <button onClick={() => changeLanguage('fr')}>FR</button>
            </div>
            <Link to="/create" className="btn btn-primary">{t('Add New Note')}</Link>
        </header>
    );
};

export default Header;