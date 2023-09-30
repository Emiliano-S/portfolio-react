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
                    <Link to='about' href='#about' duration={500} onClick={openMenuMobile}>About me</Link>
                    <Link to='services' href='#services'  duration={500} onClick={openMenuMobile}>Services</Link>
                    <Link to='contact' href='#contact'  duration={500} onClick={openMenuMobile}>Contact</Link>
                </nav>
            </div>
        </section>
    )
}

export default Header;