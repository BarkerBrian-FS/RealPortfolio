import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };
    return (
      <div style = {styles.form}>
          <form onSubmit={sendEmail}>
            <div style={styles.name}>
                <label>Name</label>
                <div style={styles.nameBox}>
                    <input type="text" name="user_name" />
                </div>
            </div>
            <div style={styles.email}>
                <label>Email</label>
                <div style={styles.emailBox}>
                    <input type="email" name="user_email" />
                </div>
            </div>
            <div style={styles.message}>
                <label>Message</label>
                <div style ={styles.messageBox}>
                    <textarea name="message" />
                </div>
            </div>
            <div style={styles.submit}>
                <input type="submit" value="Send" disabled={isSubmitting} />
            </div>
            {stateMessage && <p>{stateMessage}</p>}
          </form>
      </div>
    );
  };
  export default ContactForm;

 const styles = {
    form:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '700px',
        marginTop: '150px'
    },
    name:{
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    nameBox:{
        
    },
    email:{
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    emailBox:{

    },
    message:{
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    messageBox:{
        
    },
    submit:{
        marginLeft: '50px',
    }

  }