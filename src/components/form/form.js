import React, {Component} from 'react';
import urlLogo from './../../logo/Beans_logo_dark.svg';
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask';
import urlImg from './../../img/vector.png';
import urlArrow from './../../logo/Arrow_back.svg';
import CoffeeService from './../../services/coffeeService';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <Field placeholder={placeholder} {...field} />
      <p className='error-text'>{errorText}</p>
    </>
  )
};

const MyTextarea = ({ ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <textarea {...field} />
      <p className='error-text'>{errorText}</p>
    </>
  )
};

const phoneNumberMask = [
  /[8]/, "(", /[1-9]/, /\d/, /\d/, ")", /\d/, /\d/,
  /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/
];

const MyPhone = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
      <MaskedInput {...field} 
        mask={phoneNumberMask} 
        placeholder={placeholder} 
      />
      <p className='error-text'>{errorText}</p>
    </>
  )
};

const validationSchema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  email: yup.string().email("Invalid email address").required(),
  phone: yup.string(),
  message: yup.string().required()
});

export default class FormApp extends Component {

  coffeeService = new CoffeeService();
  state = {
    view: JSON.parse(localStorage.getItem('view') || 'true') 
  }


  updateState = () => {
    this.setState({view: JSON.parse(localStorage.getItem('view'))})
  }

  render() {
    console.log(this.state.view)
    const formView = this.state.view ? <Formik 
      initialValues={{ name: '', email: '', phone: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(value, {setSubmitting, resetForm}) => {
        setSubmitting(false);
        localStorage.setItem('view', 'false')
        this.coffeeService.postContacts(value);
        resetForm();
      }}
    >
      {({isSubmitting}) => (
      <Form>
        <label className='send-form__label'>Name<p>*</p></label>
        <MyTextField
          placeholder='Ivan'
          name='name'
          type='input' />
        <label className='send-form__label'>E-mail<p>*</p></label>
        <MyTextField 
          placeholder='ivan@google.com'
          name='email'
          type='input' />
        <label className='send-form__label'>Phone</label>
        <MyPhone 
          placeholder='8(900)999-00-00'
          mask="8(999)999-99-99"
          name='phone'
          type='text'/>
        <label className='send-form__label send-form__message'>Your message<p>*</p></label>
        <div className='boxForTextarea'>
          <MyTextarea 
            name='message' />
        </div>
        <button className="btn" disabled={isSubmitting} type='submit'>Send us</button>
      </Form>
    )}</Formik> : 
    <div className="so-much">
      <h2>Thank you so much<br />We contact you as soon as posible</h2>
      <img className="Napkin" src={urlImg} alt="Napkin" />
      <button className="btn"
              onClick={() => {
                localStorage.setItem('view', 'true')
                this.updateState()
              }}
      >Another ? <img className="arrow-back" src={urlArrow} alt="arrow" /></button>
    </div>

    return (
      <section className="send-form">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="title">Tell us about your tastes</div>
                <img className="beanslogo" src={urlLogo} alt="Beans logo" />
                {formView}
              </div>
          </div>
        </div>
      </section>
    )
  }
}
