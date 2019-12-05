import React, {Component} from 'react';
import Banner from '../banner/banner';
import Shop from '../shop/shop';
import Footer from '../footer/footer';
import urlImg from './../../img/coffee_girl.jpg';
import urlBgImg from './../../img/Coffee_bg.jpg';


export default class CoffeePage extends Component {
  render() {
    return (
      <>
        <Banner
          urlBgImg={urlBgImg}
          text='Our Coffee'
          />
        <Shop 
          urlImg={urlImg} 
          filterView={true}
          />
        <Footer />
      </>
      
    );
  }
  
}