import React, {Component} from 'react';
import Banner from '../banner/banner';
import Shop from '../shop/shop';
import Footer from '../footer/footer';
import urlImg from './../../img/coffee-839233_1920.jpg';
import urlBgImg from './../../img/coffee-2.jpg';


export default class PleasurePage extends Component {
  render() {
    return (
      <>
        <Banner
          urlBgImg={urlBgImg}
          text='For your pleasure'
          />
        <Shop 
          urlImg={urlImg} 
          
          />
        <Footer />
      </>
      
    );
  }
  
}