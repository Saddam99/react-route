import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div className='navigation'>
            <ul>
                <NavLink exact to='/' activeClassName="selected" >
                    Home
                </NavLink>
                <NavLink exact to='/features' activeClassName="selected">
                    Features
                </NavLink>
                <NavLink exact to='/contact' activeClassName="selected">
                    Contact
                </NavLink>
            </ul>
        </div>
    );
}

export default Navigation;