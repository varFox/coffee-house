import React, {Component} from 'react';
import Banner from '../banner/banner';
import Form from '../form/form';
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
        <Form />
        <Footer />
      </>
      
    );
  }
  
}