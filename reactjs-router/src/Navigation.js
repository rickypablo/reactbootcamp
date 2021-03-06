import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/userlist'>User List</NavLink></li>
            <li><NavLink to='/hello/ted'>Ted</NavLink></li>
            <li><NavLink to='/hello/john'>John</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;
