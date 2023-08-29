
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [showForm, setShowForm] = useState(false);
    
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g74saq4', 'template_756odfn', form.current, '2hIJHU8LwF0hx9dfe')
      .then((result) => {
          console.log(result.text);
          // Simulate email sending success
          setEmailSent(true);
          setShowForm(false);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleHideForm = () => {
    
    setShowForm(false);
  };
  return (
    <div>
    {emailSent ? (
      <p>Email has been sent successfully!</p>
    ) : (
      <div>
        {showForm ? (
          <div className="contact-form">
            <button className="close-button" onClick={handleHideForm}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="from_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        ) : (
          <button className='btn bg-primary text-white' onClick={() => setShowForm(true)}>Contact Me</button>
        )}
      </div>
    )}
  </div>
  )
}

export default Contact