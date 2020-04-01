import React from 'react';
import './stats.css';

const Stats = (props) =>
    <section className="stat-container">
        <img className="star-bloc" src={props.stats.bgImage} alt='' />
        <div className="main-bloc">
            <div className="text-bloc">
                <h2 className="title" >{props.stats.title}</h2>
                <p>{props.stats.about}</p>
            </div>
            <div className="card-bloc">
                {props.stats.cards.map((card,i)=> (
                    <div key={i} className="card">
                        <img src={card.icon} alt='' />
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                    </div>
                ))}  
            </div>
        </div>
    </section>

export default Stats