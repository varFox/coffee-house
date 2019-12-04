import React, {Component} from 'react';
import NavMenu from '../navMenu/navMenu';

export default class Banner extends Component {

  render() {
    const {urlBgImg, text} = this.props;
    return (
      <>
        <div className="banner" style={{background: `url(${urlBgImg})`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <header>
                  <NavMenu type='header'/>
                </header>
              </div>
            </div>
            <h1 className="title-big">{text}</h1>
          </div>
        </div>   
      </>
         
      
    );
  }
  
}