import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import Row from '../row'

import './person-page.css';


import {SwapiServiceConsumer} from "../swapi-service-context";



export default class PersonPage extends Component {



  state = {
    selectedPerson: null,
  };

  onItemSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

<<<<<<< HEAD
/////////////////////////////////////////////
=======

>>>>>>> newBranch
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    let itemList;
    let personDetails;

    switch (this.props.typePerson) {

      case "planet": {
        itemList = (
            <SwapiServiceConsumer>
              {
                ({getAllPlanets}) => {
                  return (
                      <ItemList
                          onItemSelected={this.onItemSelected}
                          getData={getAllPlanets}
                          renderItem={(item=> `${item.name}`)}
                      />
                  )
                }
              }
            </SwapiServiceConsumer>
        );

        personDetails = (
            <SwapiServiceConsumer>
              {
                ({getPlanet}) => {
                  return (
                    <ItemDetails
                        itemId={this.state.selectedPerson}
                        getData={getPlanet}
                        typePerson={this.props.typePerson}
                    />
                  )
                }
              }
            </SwapiServiceConsumer>
        );

        break;
      }

      case "people": {
        itemList = (
            <SwapiServiceConsumer>
              {
                ({getAllPeople}) => {
                  return (
                      <ItemList
                          onItemSelected={this.onItemSelected}
                          getData={getAllPeople}
                          renderItem={(item=> `${item.name}`)}
                      />
                  )
                }
              }
            </SwapiServiceConsumer>
        );

        personDetails = (
            <SwapiServiceConsumer>
              {
                ({getPerson}) => {
                  return (
                      <ItemDetails
                          itemId={this.state.selectedPerson}
                          getData={getPerson}
                          typePerson={this.props.typePerson}
                      />
                  )
                }
              }
            </SwapiServiceConsumer>
        );

        break;
      }

      case "starship": {
        itemList = (
            <SwapiServiceConsumer>
              {
                ({getAllStarships}) => {
                  return (
                      <ItemList
                          onItemSelected={this.onItemSelected}
                          getData={getAllStarships}
                          renderItem={(item=> `${item.name}`)}
                      />
                  )
                }
              }
            </SwapiServiceConsumer>
        );

        personDetails = (
            <SwapiServiceConsumer>
              {
                ({getStarship}) => {
                  return (
                      <ItemDetails
                          itemId={this.state.selectedPerson}
                          getData={getStarship}
                          typePerson={this.props.typePerson}
                      />
                  )
                }
              }
            </SwapiServiceConsumer>
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
