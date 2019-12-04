import React, {Component} from 'react';
import ShopItems from './../shopItems/shopItems';
import urlLogo from './../../logo/Beans_logo_dark.svg';


export default class Shop extends Component {

  render() {
    const {short, urlImg} = this.props;
    const Point = () => {
      return (
        <>
          <div className="row">
            <div className="col-lg-5 offset-1">
                <img className="shop__girl" src={urlImg} alt="coffee_item" />
              </div>
              <div className="col-lg-4">
                <div className="title">About it</div>
                <img className="beanslogo" src={urlLogo} alt="Beans logo" />
            <div className="shop__point">
              <span>Country: </span>
              Brazil
            </div>
            <div className="shop__point">
              <span>Description: </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="shop__point">
              <span>Price: </span>
              <span className="shop__point-price">16.99$</span>
            </div>
            </div>
          </div>
        </>
      )
    }
    const Text = () => {
      return (
        <>
          <div className="row">
            <div className="col-lg-4 offset-2">
              <img className="shop__girl" src={urlImg} alt="girl" />
            </div>
            <div className="col-lg-4">
              <div className="title">About our beans</div>
              <img className="beanslogo" src={urlLogo} alt="Beans logo" />
              <div className="shop__text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend objection do intention<br />
                so questions. <br />
                As greatly removed calling pleased improve an. Last ask him cold feel<br />
                met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                is song that held help face.
              </div>
            </div>
          </div>
          <div className="line"></div>
          <ShopItems />
        </>
        
        
      )
    }
    const block = short ? <Point /> : <Text />;
    return (
      <section className="shop">
        <div className="container">
          {block}
        </div>
      </section>
         
      
    );
  }
  
}