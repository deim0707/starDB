import React, {Component} from 'react';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import PersonPage from "../person-page";

export default class App extends Component  {

    render() {
        return (
            <div className='mx-3'>
                <Header />
                <RandomPlanet />

                <PersonPage typePerson='people'/>
                <PersonPage typePerson='planet'/>
                <PersonPage typePerson='starship'/>




            </div>
        );
    }
};

