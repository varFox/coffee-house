import React, {Component} from 'react';
import Banner from '../banner/banner';
import Shop from '../shop/shop';
import Footer from '../footer/footer';
import urlBgImg from './../../img/Coffee_bg.jpg';
import CoffeeService from './../../services/coffeeService';

export default class ItemPage extends Component {

  coffeeService = new CoffeeService();

  render() {
    const {itemName} = this.props;
    return (
      <>
        <Banner 
          urlBgImg={urlBgImg}
          text='Our Coffee'/>
        <Shop 
          short='true'
          getItem={() => this.coffeeService.getCoffeeItem(itemName)}
          />
        <Footer />
      </>
      
    );
  }
  
}