import React, {Component} from 'react';
import CoffeeService from './../../services/coffeeService';
import FilterItems from '../filterItems/filterItems';
import {withRouter} from 'react-router-dom';
import Spinner from '../spinner/spinner';
import ErrorModule from '../errorModule/errorModule';
class ShopItems extends Component {

  coffeeService = new CoffeeService();
  state = {
    coffeeItems: null,
    str: '',
    filter: 'all',
    error: false,
    loaded: true
  }

  componentDidMount() {
    this.coffeeService.getCoffee()
      .then((coffeeItems) => {
        this.setState({
          coffeeItems,
          loaded: false
        });
      })  
      .catch(() => {
        this.setState({
          loaded: false,
          error: true
        });
      });
  }

  renderCoffee(arr, filter) {
    return arr.map(item => {
      const {id, name, url, price, country} = item;

      return (
        <div 
          className="shop__item"
          key={id}
          onClick={() => {
            if (filter) this.props.history.push(name)
          }}>
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

  onFilterSelect = (filter) => {
    if(filter === this.state.filter) {
      this.setState({filter: 'all'})
    } else {
      this.setState({filter});
    }
  }

  filterItems = (items, filter) => {
    if (filter === 'Brazil') {
      return items.filter(item => item.country === 'Brazil')
    } else if (filter === 'Kenya') {
      return items.filter(item => item.country === 'Kenya')
    } else if (filter === 'Columbia') {
      return items.filter(item => item.country === 'Columbia')
    } else {
      return items
    }
  }  

  render() {

    const {coffeeItems, str, filter, error, loaded} = this.state;
    const {filterView} = this.props;

    if (loaded && !error) return <Spinner />
    if(!loaded && error) return <ErrorModule />

    const items = this.renderCoffee(this.filterItems(this.searchItems(coffeeItems, str), filter), filterView);
    const fil = filterView ? <FilterItems onSearch={this.onSearch} onFilterSelect={this.onFilterSelect} filter={filter}/> : null;

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

export default withRouter(ShopItems);