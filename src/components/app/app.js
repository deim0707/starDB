import React, {Component} from 'react';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from "../person-page";

export default class App extends Component  {

    render() {
        return (
            <div className='mx-3'>
                <Header />
                {/*если пропс будет указан undefind, то используется значение по умолчанию */}
                <RandomPlanet updateInterval={undefined}/>

                <PersonPage typePerson='people'/>
                <PersonPage typePerson='planet'/>
                <PersonPage typePerson='starship'/>
            </div>
        );
    }
};

