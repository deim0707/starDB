import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'

import './random-planet.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

  swapi = new SwapiService();

  // state = {
  //   id: null,
  //   name: null,
  //   population: null,
  //   rotationPeriod: null,
  //   diameter: null
  // };
  state = {
    planet: {},
    loading: true,
    error: false
  };



  componentDidMount() {
    this.updatePlanet();
    this.interval=setInterval(this.updatePlanet, 4000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false, error: false})
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  };
  //делаем в полях класса функцией стрелкой, когда передаём эту функцию в другую функцию
  updatePlanet =() => {
    const id = Math.floor(Math.random()*17+2);
    this.swapi
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
  };

  render() {
    const {planet, loading, error} = this.state;

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
      <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt={name}
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>

  );
};