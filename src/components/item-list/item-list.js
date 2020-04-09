import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
    state = {
        itemList: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((res)=>{
                this.setState({itemList: res, loading: false})
            })
            .catch(this.onError)
    }

    onError = () => {
        this.setState({error:true, loading:false})
    };

    renderItems (arr) {
        return arr.map((item)=>{
            const label=this.props.renderItem(item);

            return (
                <li className="list-group-item"
                    key={item.id}
                    onClick={()=> this.props.onItemSelected(item.id)}
                >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList, loading, error} = this.state;

        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const items = !(loading || error) ? this.renderItems(itemList) : null;

    return (
      <ul className="item-list list-group">
          {errorMessage}
          {spinner}
          {items}
      </ul>
    );
  }
}
