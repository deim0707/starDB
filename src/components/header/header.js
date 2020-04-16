import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                {/*Link в отличие от a href НЕ ПЕРЕЗАГРУЖАЕТ страницу на самом деле*/}
                <Link to='/'>Star DB</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <NavLink to='/people/' exact activeClassName='active'>People</NavLink >
                </li>
                <li>
                    <NavLink to='/planet/' exact activeClassName='active'>Planets</NavLink >
                </li>
                <li>
                    <NavLink to='/starship/' exact activeClassName='active'>Starships</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;