import React from 'react';
import './branch.css';

const Branch = (props) => 
<section className="branch-container">
        <p className="quote-bloc">{props.branchs.title}</p>
    <ul className="branch-bloc">
        {props.branchs.location.map((branch,i) => (
        <li key={i}>
            <a href={branch.link} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="32" viewBox="0 0 200 32">
                    <path fill="currentColor" d={branch.path}></path>
                </svg>
            </a>
        </li>
        ))}
    </ul>
</section>


export default Branch