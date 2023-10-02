import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/svg/logo.svg';
import { useTranslation } from 'react-i18next';
import Language from '../Language';

const Header = () =>{
    const [active, setActive] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const {t} = useTranslation();


    useEffect(() =>{
        window.onscroll = () =>{
            const body = document.body;
            let doc = document.documentElement;

            doc = (doc.clientHeight) ? doc : body;

            if(doc.scrollTop <= 90){
                setActive(false);
            }else{
                setActive(true);
            }
        }
    }, []);

    const openMenuMobile = (e) => {
        e.preventDefault();
        setMobileOpen(!mobileOpen);
        setIsLanguageDropdownOpen(false);  
      };

    return (
        <section className={`header ${active ? 'scroll' : ''}`} id='header'>
            <div className={`container ${mobileOpen ? 'mobile' : ''}`}>
                <div className='logoContainer'>
                    <img src={logo} alt='Emiliano Scanga' width='132' height='27'/>
                </div>
                <div className={`mobileMenu ${mobileOpen ? 'open': ''}`}
                     onClick={openMenuMobile} >
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <nav>
                    <Link to='about' href='#about' duration={500} onClick={openMenuMobile}>{t('nav.about')}</Link>
                    <Link to='services' href='#services'  duration={500} onClick={openMenuMobile}>{t('nav.services')}</Link>
                    <Link to='contact' href='#contact'  duration={500} onClick={openMenuMobile}>{t('nav.contact')}</Link>
                   <Language 
                    isDropdownOpen={isLanguageDropdownOpen}
                    onDropdownToggle={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    onLanguageChange={() => setIsLanguageDropdownOpen(false)}
                   />
                </nav>
                
            </div>
        </section>
    )
}

export default Header;