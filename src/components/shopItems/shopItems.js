import React, {Component} from 'react';
import CoffeeService from './../../services/coffeeService';
import FilterItems from '../filterItems/filterItems';

export default class ShopItems extends Component {

  coffeeService = new CoffeeService();
  state = {
    coffeeItems: null,
    str: ''
  }

  componentDidMount() {
    this.coffeeService.getCoffee()
      .then((coffeeItems) => {
        this.setState({coffeeItems});
      })  
      .catch(err => console.log(err));
  }

  renderCoffee(arr) {
    return arr.map(item => {
      const {id, name, url, price, country, description} = item;

      return (
        <div 
          className="shop__item"
          key={id}>
          <img src={url} alt={name} />
          <div className="shop__item-title">
            {name}
          </div>
        <div className="shop__item-country">{country}</div>
        <div className="shop__item-price">{price}</div>
        </div>
      )
    })
  }

  onSearch = (str) => {
    this.setState({str});
  }

  searchItems = (items, list) => {
    if (list.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.toUpperCase().indexOf(list.toUpperCase()) > -1
    });
  }

  render() {

    const {coffeeItems, str} = this.state;
    const {filterView} = this.props;

    if(!coffeeItems) {
      return 'Loader'
    }  

    const items = this.renderCoffee(this.searchItems(coffeeItems, str));
    const fil = filterView ? <FilterItems onSearch={this.onSearch}/> : null;

    return (
      <>
        {fil}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              {items}
            </div>
          </div>
        </div>
      </>
      
    );
  }
  
}