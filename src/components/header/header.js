import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = ({fetchOff}) => {
  return (
<<<<<<< HEAD
    <div className="header d-flex justify-content-between align-items-center">

      <div className="header d-flex">
          <h3>
              {/*Link в отличие от a href НЕ ПЕРЕЗАГРУЖАЕТ страницу на самом деле*/}
              <Link to='/'>Star DB</Link>
          </h3>
          <ul className="d-flex">
              <li>
                  <Link to='/people'>People</Link>
              </li>
              <li>
                  <Link to='/planet'>Planets</Link>
              </li>
              <li>
                  <Link to='/starship'>Starships</Link>
              </li>
          </ul>
      </div>

        <button onClick={fetchOff} className="btn btn-primary btn-sm" style={{height: '2.5rem', fontSize: '.7rem'}}>Fetch off</button>
    </div>
=======
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
>>>>>>> newBranch
  );
};

export default Header;