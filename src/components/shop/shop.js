import React, {Component} from 'react';
import ShopItems from './../shopItems/shopItems';
import urlLogo from './../../logo/Beans_logo_dark.svg';
import ShopPoint from './../shopPoint/shopPoint'

export default class Shop extends Component {

  render() {
    const {short, urlImg, getItem} = this.props;
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
          <ShopItems 
            filterView={this.props.filterView}/>
        </>
        
        
      )
    }
    const block = short ? <ShopPoint getItem={getItem}/> : <Text />;
    return (
      <section className="shop">
        <div className="container">
          {block}
        </div>
      </section>
         
      
    );
  }
  
}