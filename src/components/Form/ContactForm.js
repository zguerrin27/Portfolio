import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

import './ContactForm.css';


function ContactForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const sendEmail = (e) => {
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e, process.env.REACT_APP_USER_ID)
      .then((result) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm('Message Sent, I\'ll get back to you shortly', result.text)){
          window.location.reload();  
        }
        // alert('Message Sent, I\'ll get back to you shortly', result.text);
      }, (error) => {
        alert( 'An error occured, Plese try again', error.text)
      });
      
  }

  return (

      <form onSubmit={handleSubmit(sendEmail)}>
        <h1 className="contact__header">Contact Me.</h1>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input 
              name="firstName" 
              placeholder="Zach" 
              ref={register({ 
                required: "A first name is required." 
              })} 
            />
            {errors.firstName && <p className="errorMsg">{errors.firstName.message}</p>}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input 
              name="lastName" 
              placeholder="Guerrin" 
              ref={register({ 
                required: "A last name is required."
              })} 
            />
            {errors.lastName && <p className="errorMsg">{errors.lastName.message}</p>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="z.guerrin@gmail.com"
              type="email"
              ref={register({
                required: 'An email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.'
                }
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message">Enter a message</label>
            <textarea 
              name="message" 
              placeholder="Hey Zach! Lets work together..."
              className="textArea"
              ref={register({
                required: "A message is required."
              })} />
            {errors.message && <p className="errorMsg">{errors.message.message}</p>}
          </div>
          <input type="submit" />
        </form>
        

  );
}

export default ContactForm;