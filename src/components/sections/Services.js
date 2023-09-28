import React, {useState, useEffect, useRef} from 'react'
import Card from '../Card';
import iconDevelopment from '../../assets/svg/icons/services/service-development.svg';
import iconMockup from '../../assets/svg/icons/services/service-mockup.svg';
import iconEcommerce from '../../assets/svg/icons/services/service-e-commerce.svg';
import inconMobile from '../../assets/svg/icons/services/service-mobile.svg';
import iconCoffe from '../../assets/svg/icons/services/service-coffe.svg';
import iconPerformances from '../../assets/svg/icons/services/service-performances.svg';
import iconRefactoring from '../../assets/svg/icons/services/service-refactoring.svg';
import { CheckVisibility } from '../../hooks/CheckVisibility';

const Services = () =>{
    const [active, setActive] = useState('false');
    const refServices = useRef();
    const isVisible = CheckVisibility(refServices);
    const arrServices = [
        {
            icon: iconMockup,
            title: 'Mockup creation with Figma',
            description: 'Designing and crafting interactive mockups that bring your ideas to life. From concept to visualization, I specialize in creating engaging mockups that pave the way for seamless development.'
        },
        {
            icon: iconDevelopment,
            title: 'Landing page design and development',
            description: 'Crafting visually stunning and highly functional landing pages tailored to your specific goals. I focus on creating a captivating user experience to drive engagement and conversions.'
        },
        {
            icon: iconEcommerce,
            title: 'E-commerce development with WordPress',
            description: 'Building and customizing feature-rich e-commerce websites using WordPress. From product listings to secure payment gateways, I create seamless online shopping experiences.'
        },
        {
            icon: inconMobile,
            title: 'Mobile App development with Ionic/Angular',
            description: 'Designing and developing cross-platform mobile applications using Ionic and Angular. I specialize in creating efficient and engaging mobile apps for both iOS and Android platforms.'
        },
        {
            icon: iconPerformances,
            title: 'Performance optimization',
            description: 'Optimizing website performance on PageSpeed Insights platforms. I ensure that your website loads quickly and efficiently, enhancing user satisfaction and search engine rankings.'
        },
        {
            icon: iconRefactoring,
            title: 'Web page refactoring',
            description: 'Optimizing and restructuring existing web pages to improve code quality, performance, and user experience. Enhancing the efficiency and maintainability of web pages for better overall functionality.'
        },
        {
            icon: iconCoffe,
            title: 'Drink coffee',
            description: 'And last but not least, fueling creativity and productivity with a love for coffee! Because great ideas deserve great coffee.'
        },
    ];

    useEffect(() => {
        setActive(true)
    }, []);

    return(
        <section className={`services fade-in ${active ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
             id='services' ref={refServices}>
                <div className='bouble slideFromLeft'
                                        style={{
                                            borderBottomLeftRadius: "0px"
                                            }}>
                                All start with a coffee ☕
                </div>
                <div className='container'>
                    <div className='contentContainer'>
                        <h2 className='title'>
                            <span>What i do <span className='line'></span></span>
                        </h2>
                        <div className='cardContainer'>
                            {
                                arrServices.map(service => <Card cardIcon={service.icon}
                                                                 cardTitle={service.title}
                                                                 cardText={service.description}
                                                                ></Card>)
                            }
                        </div>
                    </div>
                </div>
        </section>
    )

}

export default Services;