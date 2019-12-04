import React, {Component} from 'react';
import Banner from '../banner/banner';
import Shop from '../shop/shop';
import Footer from '../footer/footer';

export default class ItemPage extends Component {
  render() {
    return (
      <>
        <Banner />
        <Shop/>
        <Footer />
      </>
      
    );
  }
  
}