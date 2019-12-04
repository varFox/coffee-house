import React, {Component} from 'react';
import Preview from '../preview/preview';
import AboutUs from '../aboutUs/aboutUs';
import OurBest from '../ourBest/ourBest';
import Footer from '../footer/footer';

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Preview />
        <AboutUs />
        <OurBest />
        <Footer />
      </>
      
    );
  }
  
}