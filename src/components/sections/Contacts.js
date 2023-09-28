import React, { useEffect, useRef, useState } from 'react';
import Socials from '../Socials';
import Chat from '../Chat';
import { CheckVisibility } from '../../hooks/CheckVisibility';

const Contact = () => {
  const [active, setActive] = useState(false);
  const refContact = useRef();
  const isVisible = CheckVisibility(refContact);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <section className={`contact fade-in ${active && 'active'} ${isVisible ? 'visible' : ''}`} id="contact" ref={refContact}>
      <div className='container'>
      <div className='aboutLeft contentContainer'>
            <div className='bouble'
                        style={{
                            borderBottomLeftRadius: "0px"
                            }}>
                What’s next? 💬
            </div>
            <h2 className='title'>
              <span>Get in touch <span className='line'></span></span>
            </h2>
            <p className='sectionDescription'>
              Thank you for considering my services. If you have a project in mind, a question, or just want to say hello, I'd love to hear from you.
            </p>
            <p className='sectionDescription'>
              Feel free to reach out using the button and social media below, and I'll get back to you as soon as possible.
            </p>
            <div className='container contact-button'>
              <div className='bouble' onClick={() => window.location = 'mailto:scangaemilianodev@gmail.com'}>
                Contact me!
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
