import React, {Component} from 'react';
import urlLogo from './../../logo/Beans_logo_dark.svg';
import Spinner from '../spinner/spinner';
export default class ShopPoint extends Component {


  render() {
    const {item} = this.props;
    
    if(!item) {
      return <Spinner />
    }
    const {name, country, url, description, price} = item;
    return (
      <>
        <div className="row">
          <div className="col-lg-5 offset-1">
              <img className="shop__girl" src={url} alt={name} />
            </div>
            <div className="col-lg-4">
              <div className="title">About it</div>
              <img className="beanslogo" src={urlLogo} alt="Beans logo" />
          <div className="shop__point">
            <span>Country: </span>
            {country}
          </div>
          <div className="shop__point">
            <span>Description: </span>
            {description}
          </div>
          <div className="shop__point">
            <span>Price: </span>
            <span className="shop__point-price">{price}</span>
          </div>
          </div>
        </div>
      </>           
    );
  }
  
}