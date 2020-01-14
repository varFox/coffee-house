import React, {Component} from 'react';
import NavMenu from '../navMenu/navMenu';



export default class Banner extends Component {

  render() {
    const {urlBgImg, text} = this.props;

    const imgStyle = {
      background: `url(${urlBgImg})`,
      backgroundSize: '100%'
    }
    return (
      <>
        <div className="banner" style={imgStyle}>
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