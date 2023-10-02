import React, { useRef } from 'react';
import sendIcon from '../assets/svg/icons/send-button.svg'
import { CheckVisibility } from '../hooks/CheckVisibility';
import { useTranslation } from 'react-i18next';


const Chat = () =>{
    const ref = useRef();
    const isVisible = CheckVisibility(ref);
    const {t} = useTranslation();
    return(
        <div id='chat' ref={ref} className={isVisible ? 'visible' : ''}>
            <div className='chatContainer'>
                <div className='chatRow right'>
                    <div className='bouble' style={{borderBottomRightRadius: '0px'}}>
                        <div className='chatUser lightBlue'>
                            {t('chat.message1Title')}
                        </div>
                        <div className='chatMessage'>
                            {t('chat.message1')}.
                        </div>
                    </div>
                </div>
                <div className='chatRow left'>
                    <div className='bouble' style={{borderBottomLeftRadius: '0px'}}>
                        <div className='chatUser darkBlue'>
                            Emiliano
                        </div>
                        <div className='chatMessage'>
                            {t('chat.message2')}
                        </div>
                    </div>
                </div>
            </div>
            <div className='chatInputContainer'>
                <div className='chatInput'>
                    <span>{t('chat.chatInput')}</span>
                </div>
                <div className='sendButton'>
                    <img src={sendIcon} alt='Send icon' width='16' height='16' />
                </div>
            </div>
        </div>
    );
}

export default Chat;