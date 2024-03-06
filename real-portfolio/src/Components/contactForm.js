import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={style.form}>
      <div style= {style.name}>
        <label>Name</label>
        <div><input type="text" name="user_name" /></div>
      </div>
      <div style= {style.email}>
        <label>Email</label>
        <div><input type="email" name="user_email" /></div>
      </div>
      <div style= {style.message}>
        <div>
          <label>Message</label>
        </div>
          <textarea name="message" />
      </div>
      <div><input type="submit" value="Send" /></div>
    </form>
  );
};

export default ContactForm

const style = {
  form:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '570px',
    marginTop: '100px',
    borderRadius: '3px'
  },
  name:{
  
  },
  input:{
    
  },

}