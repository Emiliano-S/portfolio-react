import React from 'react';


const Card = ({cardIcon, cardTitle, cardText}) =>{

    return(
        <div className='card'>
            <img src={cardIcon} alt='Card icon' width='45' height='45'/>
            <h3>
                {cardTitle}
            </h3>
            <p>
                {cardText}
            </p>
        </div>
    )
}

export default Card;
