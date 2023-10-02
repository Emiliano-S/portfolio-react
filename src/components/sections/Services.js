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
import { useTranslation } from 'react-i18next';

const Services = () =>{
    const [active, setActive] = useState('false');
    const refServices = useRef();
    const isVisible = CheckVisibility(refServices);
    const {t} = useTranslation();
    const arrServices = [
        {
            icon: iconMockup,
            tag: 'mockup'
        },
        {
            icon: iconDevelopment,
            tag: 'development'
        },
        {
            icon: iconEcommerce,
            tag:'ecommerce'
        },
        {
            icon: inconMobile,

            tag: 'mobile'
        },
        {
            icon: iconPerformances,
            tag: "performance"
        },
        {
            icon: iconRefactoring,
            tag: 'refactoring'
        },
        {
            icon: iconCoffe,
            tag: 'coffe'
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
                                {t('services.bouble')}
                </div>
                <div className='container'>
                    <div className='contentContainer'>
                        <h2 className='title'>
                            <span>{t('services.h2')} <span className='line'></span></span>
                        </h2>
                        <div className='cardContainer'>
                            {
                                arrServices.map((service, i) => <Card cardIcon={service.icon}
                                                                 cardTitle={t(`services.${service.tag}.title`)}
                                                                 cardText={t(`services.${service.tag}.description`)}
                                                                 key={`service${i}`}
                                                                ></Card>)
                            }
                        </div>
                    </div>
                </div>
        </section>
    )

}

export default Services;