import React, {useEffect, useRef, useState} from 'react'
import  villa from '../../assets/lago-como-villa.webp';
import villaMobile from '../../assets/lago-como-villa-mobile.webp';
import angularIcon from '../../assets/svg/icons/angular-icon.svg';
import reactIcon from '../../assets/svg/icons/react-icon.svg';
import ionicIcon from '../../assets/svg/icons/ionic-icon.svg';
import wordPressIcon from '../../assets/svg/icons/wordpress-icon.svg';
import { CheckVisibility } from '../../hooks/CheckVisibility';

const About = () =>{
    const [active, setActive] = useState(false);
    const refAbout = useRef();
    const isVisible = CheckVisibility(refAbout);

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
                            A summary about me 🙋🏻‍♂️
                        </div>
                        <h2 className='title w80'>
                            <span>About me <span className='line'></span></span>
                        </h2>
                        <p className='sectionDescription w80'>
                            Hello, I'm <b>Emiliano Scanga</b>, a 28-year-old front-end developer living in <b>Como (IT)</b>. <br /> I've been a passionate web page and application creator since I was twelve years old. It all began during my school days when I had an experience with <b>Microsoft Front Page</b> and <b>Dreamweaver</b>, leading me to create my first landing page. Since then, my passion has steadily grown, driving me to independently deepen my knowledge of <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
                        </p>
                        <p className='sectionDescription w80'>
                            In <b>2023</b>, my dedication to web development led me to make a significant decision: I chose to pursue a professional path as a <b>Full Stack Web Developer</b> with <b>Develhope</b>. This decision was fueled by my desire to expand my skills and gain a deeper perspective in the field of web development.
                        </p>
                        <p className='sectionDescription w80'>
                            I'm thrilled to put my skills and knowledge into practice, making the most of opportunities to grow as a professional in the industry.
                        </p>
                        <p className='sectionDescription w80'>
                            Here are a few technologies I've been working with:
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