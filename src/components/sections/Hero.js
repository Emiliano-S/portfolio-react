import React, { useRef } from 'react'
import profile from '../../assets/svg/profile.svg';
import Socials from '../Socials';
import { CheckVisibility } from '../../hooks/CheckVisibility';

const Hero = () =>{
    const refHero = useRef();
    const isVisible = CheckVisibility(refHero);
    return (
        <section id='hero' className={`full ${isVisible ? 'visible' : ''}`} ref={refHero}>
            <div className='container'>
                <div className='heroLeft'>
                    <div className='heroContainer w80'>
                        <div className='bouble slideFromLeft'
                            style={{
                                borderBottomLeftRadius: "0px"
                                }}>
                            Welcome to my world! 👋🏻
                        </div>
                        <h1 className='title'>
                            <span>Hi, i'm <b>Emiliano</b> a</span>
                            <span>Front-end developer</span>
                        </h1>
                        <p className='sectionDescription'>
                        My mission is to create <b>engaging</b> and <b>intuitive</b> digital experiences that capture attention and provide tangible value. With a blend of <b>creativity</b> and <b>technical</b> expertise, I transform ideas into <b>extraordinary projects</b>.<br />
                        <br />
                        Learn more about me and my work by browsing this portfolio.
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