import React, {Component} from 'react';
import urlLogo from './../../logo/Beans_logo_dark.svg';
import { Formik, Field, Form, useField } from 'formik';
import * as yup from 'yup';
import MaskedInput from 'react-text-mask';


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
  "+7(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/,
  /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/
];

const MyPhone = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <>
        <MaskedInput {...field} 
          mask={phoneNumberMask} 
          placeholder={placeholder}/>
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
  render() {
    return (
      <section className="send-form">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  <div className="title">Tell us about your tastes</div>
                  <img className="beanslogo" src={urlLogo} alt="Beans logo" />
                  <Formik 
                    initialValues={{ name: '', email: '', phone: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(value, {setSubmitting, resetForm}) => {
                      const changedValue = value.phone
                        .replace(/_/g, '');
                      setTimeout(() => {
                        alert(JSON.stringify(changedValue, null, 2));
                        setSubmitting(false);
                      }, 500);
                      setSubmitting(true);
                      setSubmitting(false);
                      resetForm();
                    }}
                  >
                    {({values, isSubmitting, errors, setFieldValue}) => (
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
                        placeholder='+7(900)999-00-00'
                        mask="+7(999)999-99-99"
                        name='phone'
                        type='text'
                        id="phone"
                        onChange={e => {
                          const value = e.target.value || '';
                          console.log({ value });
                          setFieldValue('phone', value);
                        }}/>


                      <label className='send-form__label send-form__message'>Your message<p>*</p></label>
                      <div className='boxForTextarea'>
                        <MyTextarea 
                          name='message' />
                      </div>
                      
                      <button className="btn" disabled={isSubmitting} type='submit'>Send us</button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                    </Form>
                  )}</Formik>
                  
                    
              </div>


          </div>
        </div>
      </section>
    )
  }
}
