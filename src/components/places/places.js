import React from 'react';
import './places.css';

const Place = (props) =>
    <section className="place-container">
        <div className="title-bloc">
            <h2>{props.places.title}</h2>
            <p>{props.places.about}</p>
        </div>
        <div className="place-card-bloc">
            {props.places.cards.map((card,i) => (
                <a key={i} href={card.link} className="place-card" target='_blank' rel='noopener noreferrer'>
                    <img src={card.image} alt='' />
                    <div className="card-content">
                        <p>{card.title}</p>
                        <button>see openings</button>
                    </div>
                </a>
            ))}
           
        </div>
    </section>


export default Place