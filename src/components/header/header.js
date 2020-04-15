import React from 'react';
import {Link} from 'react-router-dom';

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
              <Link to='/people/'>People</Link>
          </li>
          <li>
              <Link to='/planet/'>Planets</Link>
          </li>
          <li>
              <Link to='/starship/'>Starships</Link>
          </li>
      </ul>
  </div>
  );
};

export default Header;