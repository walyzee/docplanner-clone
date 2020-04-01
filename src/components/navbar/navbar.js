import React from 'react';
import './navbar.css';



const Navbar = (props) => 
    <header className="header-container">
        <nav className="header-navbar">
            <div className="header-logo">
                <img className="responsive" src={props.menu.logo} alt="Docplanner-logo" />
            </div>
            <div className="header-menu">
                <ul>
                    {props.menu.items.map((item,i)=>(
                        (item.children) ? (
                            <li key={i} className={item.isActive ? 'dropdown active' : 'dropdown'}>
                                <a href={item.link}>
                                    {item.title}
                                </a>
                                <div className="dropdown-content">
                                    <ul> {item.children.map((child, i)=> 
                                            <li key={i} className={child.isActive ? 'dropdown-item active' : 'dropdown-item'}>
                                                <a href={child.link}>
                                                    {child.title}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                        ) : 
                        (
                        <li key={i}>
                            <a className={item.isActive ? 'active' : null} href={item.link}>
                                {item.title}
                            </a>
                        </li>
                        )  
                    ))}
                </ul>
            </div>
        </nav>
    </header>


export default Navbar