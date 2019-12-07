import React, {Component} from 'react';
import urlLogo from './../../logo/Beans_logo.svg';
import {Link} from 'react-router-dom';

export default class NotFoundPage extends Component {
  render() {
    return (
      <>
        <div className="not-found">
          <div className="not-found__block">
            <h1 className="title-big">Oops</h1>
            <img className="beanslogo" src={urlLogo} alt="Beans logo" />
            <div className='not-found__text'>We don't have that page</div>
            <Link to='/' className="not-found__link">Go to home</Link>
          </div>
        </div>
      </>
    )
  }
  
}