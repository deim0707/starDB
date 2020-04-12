import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from "../person-page";
import WelcomePage from "../sw-pages/welcome-page";
import DummySwapiService from "../../services/dummy-swapi-service";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from '../swapi-service-context'

<<<<<<< HEAD
export default class App extends Component  {

    state = {
        swapiService: new DummySwapiService()
    };

    fetchOff = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render() {
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className='mx-3'>
                        <Header fetchOff={this.fetchOff}/>
                        <RandomPlanet updateInterval={undefined}/> {/*если пропс будет указан undefined, то используется значение по умолчанию */}

                        <Route path='/' component={WelcomePage} exact />  {/*exact - строгое указание того, что роутер должен искать не наличие пути на компонент. а строгое ему соответствие. написание exact === exact={true}*/}

                        <Route path="/people" render={()=><PersonPage typePerson='people'/>} />
                        <Route path="/planet" render={(props)=><PersonPage typePerson='planet' {...props}/> } /> {/*не обязательная вариация*/}
                        <Route path="/starship" exact render={()=><PersonPage typePerson='starship'/>} />
                        <Route path="/starship/:id" render={()=><PersonPage typePerson='starship'/>} /> {/*заготовка под отображение по определённому пути конкретной Персоны*/}
                    </div>
                </Router>
            </SwapiServiceProvider>
        );
    }
=======
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

                    {/*<Redirect to='/'/> /!*работает только с BrowserRouter*!/*/}
                    {/*<Route render={()=><h2>Page not found</h2>} /> /!*Route без указания страницы, заключённый в Switch будет срабатывать, если указанная страница не найдена*!/*/}
                </div>
            </Switch>
        </Router>
    );
>>>>>>> newBranch
};

export default App;

