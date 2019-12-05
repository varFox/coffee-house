import React, {Component} from 'react';
import CoffeeService from './../../services/coffeeService';

export default class OurBest extends Component {

  coffeeService = new CoffeeService();
  state = {
    bestsellers: null
  }

  componentDidMount() {
    this.coffeeService.getBestsellers()
      .then((bestsellers) => {
        this.setState({
          bestsellers
        });
      })  
      .catch(err => console.log(err));
  }

  renderBestsellers(arr) {
    return arr.map(item => {
      const {id, name, url, price} = item;

      return (
        <div 
          className="best__item"
          key={id}>
          <img src={url} alt={name} />
          <div className="best__item-title">
              {name}
          </div>
          <div className="best__item-price">{price}</div>
        </div>
      )
    })
  }

  render() {

    const {bestsellers} = this.state

    if(!bestsellers) {
      return 'Loader'
    }   

    const items = this.renderBestsellers(bestsellers);
    return (
      <section className="best">
        <div className="container">
          <div className="title">Our best</div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="best__wrapper">
                
                {items}

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}