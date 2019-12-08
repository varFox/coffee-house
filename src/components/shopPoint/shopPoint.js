import React, {Component} from 'react';
import urlLogo from './../../logo/Beans_logo_dark.svg';
import Spinner from '../spinner/spinner';
export default class ShopPoint extends Component {

  state = {
    flag: false,
    str: ''
  }

  componentWillMount() {
    if (this.props.item.description.length > 200) {
      this.setState({
        flag: true,
        str: this.props.item.description.slice(0, 200) + '...'
      });
    } 
  }

  concatDescription = (str) => {
    this.setState({
      flag: false,
      str
    })
  }

  render() {
    const {item} = this.props;
    
    if(!item) {
      return <Spinner />
    }
    const {name, country, url, description, price} = item;
    const {str, flag} = this.state;
    let descriptionBlock;

    if (flag) {
      descriptionBlock = (<div className="shop__point" onClick={() => this.concatDescription(description)}><span>Description: </span>{str}</div>)
    } else {
      descriptionBlock = (<div className="shop__point"><span>Description: </span>{str}</div>)
    }

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
          {descriptionBlock}
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