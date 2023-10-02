import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import flagUsa from '../assets/svg/flags/flag-usa.svg';
import flagSpain from '../assets/svg/flags/flag-spain.svg';


const Language = () =>{
    const { i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      setDropdownOpen(false); 
    };

    return (
    <div className={`language-dropdown ${dropdownOpen ? 'open' : ''}`}>
      <div className="selected-language" onClick={toggleDropdown}>
      <img src={i18n.language === 'en' ? flagUsa : flagSpain} alt="Flag" width='25' height='25' />
      </div>
      <div className="dropdown-content">
        <button onClick={() => changeLanguage('en')}>
          <img src={flagUsa} alt="English" width='25' height='25' /> English
        </button>
        <button onClick={() => changeLanguage('es')}>
          <img src={flagSpain} alt="Español" width='25' height='25' /> Español
        </button>
      </div>
    </div>
    );
}

export default Language;