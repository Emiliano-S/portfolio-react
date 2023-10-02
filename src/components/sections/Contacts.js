import React, { useEffect, useRef, useState } from 'react';
import Socials from '../Socials';
import Chat from '../Chat';
import { CheckVisibility } from '../../hooks/CheckVisibility';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [active, setActive] = useState(false);
  const refContact = useRef();
  const isVisible = CheckVisibility(refContact);
  const {t} = useTranslation();

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <section className={`contact fade-in ${active ? 'active' : ''} ${isVisible ? 'visible' : ''}`} id="contact" ref={refContact}>
      <div className='container'>
      <div className='aboutLeft contentContainer'>
            <div className='bouble'
                        style={{
                            borderBottomLeftRadius: "0px"
                            }}>
                {t('about.bouble')}
            </div>
            <h2 className='title w80'>
              <span>{t('about.h2')}<span className='line'></span></span>
            </h2>
            <p className='sectionDescription w80'
               dangerouslySetInnerHTML={{ __html: t('contact.description.firstP') }}>
              
            </p>
            <p className='sectionDescription w80'
                dangerouslySetInnerHTML={{ __html: t('contact.description.firstP') }}>
              
            </p>
            <div className='container contact-button'>
              <div className='bouble' onClick={() => window.location = 'mailto:scangaemilianodev@gmail.com'}>
                {t('contact.button')}
              </div>
              <Socials></Socials>
            </div>
        </div>
        <div className='aboutRight'>
            <Chat></Chat>
        </div>
      </div>
    </section>
  );
};

export default Contact;
