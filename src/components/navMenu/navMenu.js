import React, {Component} from 'react';
import logoBlack from '../../logo/Logo_black.svg';
import logoWhite from '../../logo/Logo.svg';
import {Link} from 'react-router-dom';

export default class NavMenu extends Component {
  
  render() {
    const {type} = this.props;
    const url = (type === 'header') ? logoWhite : logoBlack;
    return (
      <ul className={type}>
        <li className= {type + "__item"}>
          <Link to='/'>
              <img src={url} alt="logo"/>
          </Link>
        </li>
        <li className={type + "__item"}>
          <Link to='/coffee/'>Our coffee</Link>
        </li>
        <li className={type + "__item"}>
          <Link to='/pleasure/'>For your pleasure</Link>
        </li>
        <li className={type + "__item"}>
          <Link to='/contacts/'>Contact us</Link>
        </li>
      </ul>
    );
  }
}

