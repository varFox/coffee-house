import React, {Component} from 'react';
import urlLogo from './../../logo/Beans_logo_dark.svg';


export default class Form extends Component {
  render() {
    return (
      <section className="send-form">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="title">Tell us about your tastes</div>
                  <img className="beanslogo" src={urlLogo} alt="Beans logo" />
                  <form action="">
                    <label className='send-form__label'>Name<p>*</p></label>
                    <input></input>
                    <label className='send-form__label'>E-mail<p>*</p></label>
                    <input></input>
                    <label className='send-form__label'>Phone</label>
                    <input></input>
                    <label className='send-form__label send-form__message'>Your message<p>*</p></label>
                    <textarea></textarea>
                    <button class="btn">Send us</button>
                  </form>
              </div>


          </div>
        </div>
      </section>
    )
  }
}