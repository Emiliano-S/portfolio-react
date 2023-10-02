import React, { useRef } from 'react'
import profile from '../../assets/svg/profile.svg';
import Socials from '../Socials';
import { CheckVisibility } from '../../hooks/CheckVisibility';
import { useTranslation } from 'react-i18next';

const Hero = () =>{
    const refHero = useRef();
    const isVisible = CheckVisibility(refHero);
    const {t} = useTranslation();
    return (
        <section id='hero' className={`full ${isVisible ? 'visible' : ''}`} ref={refHero}>
            <div className='container'>
                <div className='heroLeft'>
                    <div className='heroContainer w80'>
                        <div className='bouble slideFromLeft'
                            style={{
                                borderBottomLeftRadius: "0px"
                                }}>
                            {t('hero.bouble')}
                        </div>
                        <h1 className='title'
                            dangerouslySetInnerHTML={{ __html: t('hero.h1') }}>
                        </h1>
                        <p className='sectionDescription'
                        dangerouslySetInnerHTML={{ __html: t('hero.p') }}>
                        </p>
                        <Socials></Socials>
                    </div>
                </div>
                <div className='heroRight'>
                    <div className='heroPictureMain'>
                        <img className='profile' src={profile} alt='Emiliano Scanga' />
                        <div className='heroPictureContainer'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;