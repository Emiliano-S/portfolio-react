import React from 'react';
import ig from '../assets/svg/icons/ig icon.svg'
import git from '../assets/svg/icons/git icon.svg'
import linkedin from '../assets/svg/icons/link icon.svg'

const Socials = () =>{
    const socialsArray = [
        {
            icon: ig,
            link: 'https://www.instagram.com/tano_sx/',
            alt: 'Instagram: @tano_sx'
        },
        {
            icon: git,
            link: 'https://github.com/Emiliano-S',
            alt: 'GitHub: Emiliano-S'
        },
        {
            icon: linkedin,
            link: 'https://www.linkedin.com/in/emilianoscanga/',
            alt: 'Linkedin: @emilianoscanga'
        },
    ]

    return(
        <div className="socialContainer sectionDescription">
            {
                socialsArray.map(social => 
                    <div className='socialIcon'>
                        <a href={social.link}>
                            <img src={social.icon} alt={social.alt}/>
                        </a>
                    </div>
                    )
            }
        </div>
    );
}

export default Socials;