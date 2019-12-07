import React, {Component} from 'react';
import Banner from '../banner/banner';
import Shop from '../shop/shop';
import Footer from '../footer/footer';
import NotFoundPage from '../pages/notFoundPage';
import Spinner from '../spinner/spinner';
import urlBgImg from './../../img/Coffee_bg.jpg';
import CoffeeService from './../../services/coffeeService';

export default class ItemPage extends Component {

  coffeeService = new CoffeeService();
  state = {
    item: null,
    error: false,
    loaded: true
  }

  componentDidMount() {
    const {itemName} = this.props;
    this.coffeeService.getCoffeeItem(itemName)
      .then((item) => {
        this.setState({
          item,
          loaded: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loaded: false
        });
      });
  }

  render() {
    const {item, error, loaded} = this.state;

    if (loaded && !error) return <Spinner />
    if (error && !loaded) return <NotFoundPage />

    return (
      <>
        <Banner 
          urlBgImg={urlBgImg}
          text='Our Coffee'/>
        <Shop 
          short='true'
          item={item}
          />
        <Footer />
      </>
      
    );
  }
  
}