import React, { Component } from 'react';

import './item-details.css';
import ErrorIndicator from "../error-indicator";

import PlanetDetailsView from "../sw-pages/planet-page";
import PeopleDetailsView from "../sw-pages/people-page";
import StarshipDetailsView from "../sw-pages/starship-page";

export default class ItemDetails extends Component {

  state = {
    item: null,
    error: false
  };

  componentDidMount() {
    this.updateItem()
  }

  //очень важно использовать это условие внутри! если в дидУпдейт идёт изменение стейта
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onError = () => {
    this.setState({error: true})
  };

  updateItem () {
    const getData=this.props.getData;
    const {itemId} = this.props;
    if (!itemId) {
      return
    }
    getData(itemId)
        .then((res)=> {
          this.setState({item: res})
        })
        .catch(this.onError)
  }


  render() {

    const {error} = this.state;

    const errorMessage = error ? <ErrorIndicator/> : null;
    let doSelectItem;
    let content;



    if (this.props.typePerson === 'people') {
      content = this.state.item ? <PeopleDetailsView person={this.state.item}/> : null;
      doSelectItem = (!this.state.item && !error) ? <span>Select a <b>people</b> from list</span> : null;
    }
    if (this.props.typePerson === 'planet') {
      content = this.state.item ? <PlanetDetailsView planet={this.state.item}/> : null;
      doSelectItem = (!this.state.item && !error) ? <span>Select a <b>planet</b> from list</span> : null;
    }
    if (this.props.typePerson === 'starship') {
      content = this.state.item ? <StarshipDetailsView starship={this.state.item}/> : null;
      doSelectItem = (!this.state.item && !error) ? <span>Select a <b>starship</b> from list</span> : null;
    }


    return (
      <div className="person-details card">
        {doSelectItem}
        {errorMessage} 
        {content}
      </div>
    )
  }
}