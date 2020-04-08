import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner";

export default class ItemList extends Component {
    state = {
        itemList: null,
        loading: true
    };

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then((res)=>{
                this.setState({itemList: res, loading: false})
            })
    }

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
        const {itemList, loading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const items = !loading ? this.renderItems(itemList) : null;

    return (
      <ul className="item-list list-group">
          {spinner}
          {items}
      </ul>
    );
  }
}
