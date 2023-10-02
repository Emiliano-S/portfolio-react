import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () =>{
    const {t} = useTranslation();
    return(
        <footer>
            <span>{t('footer.description')} <span>❤️</span></span>
        </footer>
    );
}

export default Footer;