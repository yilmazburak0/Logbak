import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const NavLinks = () => {
    const { t, i18n } = useTranslation();

    return (
      <>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#about">
          {t('navbar.about')}
        </HashLink>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#services">
          {t('navbar.services')}
        </HashLink>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#contact">
          {t('navbar.contact')}
        </HashLink>
        <button 
          className="px-2 font-medium text-gray-500 hover:text-blue-900" 
          onClick={() => i18n.changeLanguage("tr")}>
          TR
        </button>
        <button 
          className="px-2 font-medium text-gray-500 hover:text-blue-900" 
          onClick={() => i18n.changeLanguage("en")}>
          EN
        </button>
      </>
    );
}

export default NavLinks;