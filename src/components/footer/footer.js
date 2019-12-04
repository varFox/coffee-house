import React, {Component} from 'react';
import url from '../../logo//Beans_logo_dark.svg';
import NavMenu from '../navMenu/navMenu';


export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <NavMenu type='footer'/>
            </div>
          </div>
          <img className="beanslogo" src={url} alt="Beans logo" />
        </div>
      </footer>
      
    );
  }
}