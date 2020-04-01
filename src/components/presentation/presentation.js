import React from 'react';
import './presentation.css';

const Presentation = (props) => 
    <div className="presentation-container">
      <section className="goal-container">
        <img className="goal-icon" src={props.content.logo} alt=''/>
        <h1 className="title">{props.content.title}</h1>
        <div className="goal-text">
            <p className="text-bloc">{props.content.leftParagraph}</p>
            <p className="text-bloc">{props.content.rightParagraph}</p>
        </div>
      </section>
    <section className="package-container">
      {props.content.cards.map((card,i) => (
        <div key={i} className={card.class+' content'}>
          <h6>{card.title}</h6>
          <p>{card.about}</p>
          <img src={card.image} alt='' />
          {
            (card.selectBox) ? (
              <select className="selectbox">
                {card.selectBox.map((option,i) => (<option key={i} value={option.value}>{option.content}</option>))}
              </select>
            ) : null
          }
        </div>
      ))}
    </section>
    </div>
    



export default Presentation