import React from 'react';
import { useForm } from "react-hook-form";

import './ContactForm.css';


function ContactForm(props) {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="contactForm__Container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              name="textArea" 
              placeholder="Hey Zach! Lets work together..."
              className="textArea"
              ref={register({
                required: "A message is required."
              })} />
            {errors.textArea && <p className="errorMsg">{errors.textArea.message}</p>}
          </div>
          <input type="submit" />
        </form>
      </div>
  );
}

export default ContactForm;