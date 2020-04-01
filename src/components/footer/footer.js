import React from 'react';
import './footer.css';

const Footer = (props) => 

<footer className="footer-container">
    <p>{props.content.about}
    {props.content.locations.map((country,i)=> (
        <span key={i}><a href={country.link} target="_blank" rel='noopener noreferrer'>{country.title}</a></span>
    ))}
    </p>
    <p>{props.content.cookies}</p>
    <p>{props.content.website} &copy; {props.content.year}</p>
</footer>

export default Footer