import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row'

import './person-page.css';
import SwapiService from "../../services/swapi-service";

export default class PersonPage extends Component {

  swapi = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onItemSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };


  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    let itemList;
    let personDetails;

    switch (this.props.typePerson) {

      case "planet": {
        itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapi.getAllPlanets}
                renderItem={(item=> `${item.name}`)}
            />

        );

        personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapi.getPlanet}
                typePerson={this.props.typePerson}
            />
        );
        break;
      }

      case "people": {
        itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapi.getAllPeople}
                renderItem={(item=> `${item.name}`)}
            />

        );

        personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapi.getPerson}
                typePerson={this.props.typePerson}
            />
        );
        break;
      }

      case "starship": {
        itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapi.getAllStarships}
                renderItem={(item=> `${item.name}`)}
            />

        );

        personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={this.swapi.getStarship}
                typePerson={this.props.typePerson}
            />
        );
        break;
      }

      default: {
        return
      }
    }



    return (
        <Row left={itemList} right={personDetails} />
    );
  }
}
