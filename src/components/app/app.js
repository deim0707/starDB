import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from "../person-page";
import WelcomePage from "../sw-pages/welcome-page";

const App = () =>  {
    return (
        <Router>
            <Switch>
                <div className='mx-3'>
                    <Header/>
                    <RandomPlanet updateInterval={undefined}/> {/*если пропс будет указан undefined, то используется значение по умолчанию */}

                    <Route path='/' component={WelcomePage} exact />  {/*exact - строгое указание того, что роутер должен искать не наличие пути на компонент. а строгое ему соответствие. написание exact === exact={true}*/}

                    <Route path="/people" render={()=><PersonPage typePerson='people'/>} />
                    <Route path="/planet" render={(props)=><PersonPage typePerson='planet' {...props}/> } /> {/*не обязательная вариация*/}
                    <Route path="/starship" exact render={()=><PersonPage typePerson='starship'/>} />
                    <Route path="/starship/:id" render={()=><PersonPage typePerson='starship'/>} /> {/*заготовка под отображение по определённому пути конкретной Персоны*/}

                    <Route render={()=><h2>Page not found</h2>}/> {/*Route без указания страницы, заключённый в Switch будет срабатывать, если указанная страница не найдена*/}
                </div>
            </Switch>
        </Router>
    );
};

export default App;

