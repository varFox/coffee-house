import React, {Component} from 'react';
import url from '../../logo/Beans_logo.svg';
import NavMenu from '../navMenu/navMenu';
import {Link} from 'react-router-dom';

export default class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                <header>
                  <NavMenu type='header'/>
                </header>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <h1 className="title-big">Everything You Love About Coffee</h1>
                    <img className="beanslogo" src={url} alt="Beans logo"/>
                    <div className="preview__subtitle">We makes every day full of energy and taste</div>
                    <div className="preview__subtitle">Want to try our beans?</div>
                    <Link to='/coffee/' className="preview__btn">More</Link>
                </div>
            </div>
        </div>
    </div>
    );
  }
}