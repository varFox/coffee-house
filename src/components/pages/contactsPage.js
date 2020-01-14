import React, {Component} from 'react';
import Banner from '../banner/banner';
import FormApp from '../form/form';
import Footer from '../footer/footer';
import urlBgImg from './../../img/coffee-1.jpg';


export default class ContactsPage extends Component {

  render() {
    return (
      <>
        <Banner
          urlBgImg={urlBgImg}
          text='Contact us'
          />
        <FormApp />
        <Footer />
      </>
      
    );
  }
  
}