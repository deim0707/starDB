import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from "../person-page";

export default class App extends Component  {

    render() {
        return (
            <Router>
                <div className='mx-3'>
                    <Header />
                    {/*если пропс будет указан undefined, то используется значение по умолчанию */}
                    <RandomPlanet updateInterval={undefined}/>

                    <Route path='/'
                           // ниже, строгое указание того, что роутер должен искать не наличие пути на компонент. а строгое ему соответствие
                           exact={true}
                           render={()=>
                               <h2 className='mx-auto my-4' style={{maxWidth: '350px',textAlign: 'center'}}>
                                   Welcome to StarDB
                               </h2>}
                    />

                    {/*<Route path="/people" component={PersonPage} />  вариант передачи компонента без пропсов*/}
                    <Route path="/people" render={()=><PersonPage typePerson='people'/>} />
                    <Route path="/planet" render={(props)=><PersonPage typePerson='planet' {...props}/> } /> {/*не обязательная вариация*/}
                    <Route path="/starship" render={()=><PersonPage typePerson='starship'/>} />
                </div>
            </Router>
        );
    }
};

