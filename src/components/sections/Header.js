import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/svg/logo.svg';

const Header = () =>{
    const [active, setActive] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);


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
    }

    return (
        <section className={`header ${active && 'scroll'}`} id='header'>
            <div className={`container ${mobileOpen && 'mobile'}`}>
                <div className='logoContainer'>
                    <img src={logo} alt='Emiliano Scanga' />
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
                    <Link to='about' smoot={true} duration={500} onClick={openMenuMobile}>About me</Link>
                    <Link to='services' smoot={true} duration={500} onClick={openMenuMobile}>Services</Link>
                    <Link to='works' smoot={true} duration={500} onClick={openMenuMobile}>Works</Link>
                    <Link to='contact' smoot={true} duration={500} onClick={openMenuMobile}>Contact</Link>
                </nav>
            </div>
        </section>
    )
}

export default Header;