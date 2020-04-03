import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";

export default class PersonDetails extends Component {

  swapi = new SwapiService();

  state = {
    person: null,
    error: false
  };

  componentDidMount() {
    this.updatePerson()
  }

  //очень важно использовать это условие внутри! если в дидУпдейт идёт изменение стейта
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  onError = (err) => {
    this.setState({error: true})
  };

  updatePerson () {
    const {personId} = this.props;
    if (!personId) {
      return
    }
    this.swapi.getPerson(personId)
        .then((res)=> {
          this.setState({person: res})
        })
        .catch(this.onError)
  }


//////////////////////////////////////////////////////
  render() {
    const {planet, error} = this.state;

    const doSelectPerson = (!this.state.person && !error) ? <span>Select a person from list</span> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const content = this.state.person ? <PersonDetailsView person={this.state.person}/> : null;

    // console.log(this.state.person);

    return (
      <div className="person-details card">
        {doSelectPerson}
        {errorMessage}
        {content}
      </div>
    )
  }
}


const PersonDetailsView = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person;
  return (
      <React.Fragment>
        <img className="person-image"
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
  )
};