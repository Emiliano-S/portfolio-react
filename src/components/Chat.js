import React, { useRef } from 'react';
import sendIcon from '../assets/svg/icons/send-button.svg'
import { CheckVisibility } from '../hooks/CheckVisibility';


const Chat = () =>{
    const ref = useRef();
    const isVisible = CheckVisibility(ref);
    return(
        <div id='chat' ref={ref} className={isVisible ? 'visible' : ''}>
            <div className='chatContainer'>
                <div className='chatRow right'>
                    <div className='bouble' style={{borderBottomRightRadius: '0px'}}>
                        <div className='chatUser lightBlue'>
                            You
                        </div>
                        <div className='chatMessage'>
                            Hi there! I came across your portfolio and I'm interested in your web development services.
                        </div>
                    </div>
                </div>
                <div className='chatRow left'>
                    <div className='bouble' style={{borderBottomLeftRadius: '0px'}}>
                        <div className='chatUser darkBlue'>
                            Emiliano
                        </div>
                        <div className='chatMessage'>
                            Hey, how i can help you? 😊
                        </div>
                    </div>
                </div>
            </div>
            <div className='chatInputContainer'>
                <div className='chatInput'>
                    <span>I wanna...</span>
                </div>
                <div className='sendButton'>
                    <img src={sendIcon} alt='Send icon' />
                </div>
            </div>
        </div>
    );
}

export default Chat;