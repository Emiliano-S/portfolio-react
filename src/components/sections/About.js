import React, {useEffect, useRef, useState} from 'react'
import  villa from '../../assets/lago-como-villa.webp';
import villaMobile from '../../assets/lago-como-villa-mobile.webp';
import angularIcon from '../../assets/svg/icons/angular-icon.svg';
import reactIcon from '../../assets/svg/icons/react-icon.svg';
import ionicIcon from '../../assets/svg/icons/ionic-icon.svg';
import wordPressIcon from '../../assets/svg/icons/wordpress-icon.svg';
import { CheckVisibility } from '../../hooks/CheckVisibility';
import { useTranslation } from 'react-i18next';

const About = () =>{
    const [active, setActive] = useState(false);
    const refAbout = useRef();
    const isVisible = CheckVisibility(refAbout);
    const {t} = useTranslation();

    useEffect(()=>{
        setActive(true);
    }, []);

    return(
        <section className={`about fade-in  ${active ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
             id='about' ref={refAbout}>
                <div className='container'>
                    <div className='aboutLeft imageContainer'>
                        <picture>
                            <source srcset={villaMobile} media="(max-width: 900px)" width='371' height='247' />
                            <img src={villa} alt='Villa Lago di Como' width='579' height='386'/>
                        </picture>

                    </div>
                    <div className='aboutRight contentContainer'>
                        <div className='bouble slideFromRight'
                                    style={{
                                        borderBottomRightRadius: "0px"
                                        }}>
                            {t('about.bouble')}
                        </div>
                        <h2 className='title w80'>
                            <span>{t('about.h2')}<span className='line'></span></span>
                        </h2>
                        <p className='sectionDescription w80'
                           dangerouslySetInnerHTML={{ __html: t('about.description.firstP') }}>
                        </p>
                        <p className='sectionDescription w80'
                           dangerouslySetInnerHTML={{ __html: t('about.description.secondP') }}>

                        </p>
                        <p className='sectionDescription w80'
                            dangerouslySetInnerHTML={{ __html: t('about.description.thirdP') }}>
                        </p>
                        <p className='sectionDescription w80'>
                            {t('about.description.fourthP')}
                        </p>
                        <div className='techContainer'>
                            <div className='bouble'>
                                <img src={angularIcon} alt='Angular icon' width='24' height='24'/>
                                Angular
                            </div>
                            <div className='bouble'>
                                <img src={reactIcon} alt='React icon' width='23' height='22'/>
                                React
                            </div>
                            <div className='bouble'>
                                <img src={ionicIcon} alt='Ionic icon' width='20' height='20'/>
                                Ionic
                            </div>
                            <div className='bouble'>
                                <img src={wordPressIcon} alt='WordPress icon' width='17' height='18'/>
                                WordPress
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default About;