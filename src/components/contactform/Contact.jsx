import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button"


const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g74saq4",
        "template_756odfn",
        form.current,
        "2hIJHU8LwF0hx9dfe"
      )
      .then(
        (result) => {
          console.log(result.text);
          
          setEmailSent(true);
          setShowForm(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleHideForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      {emailSent ? (
        <p className="text-success">Email has been sent successfully!</p>
      ) : (
        <div>
          {showForm ? (
            <div className="contact-form">
              <button className="close-button" onClick={handleHideForm}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex flex-column"
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  name="user_name"
                  required
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  name="from_email"
                  type="email"
                  required
                  pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                  margin="normal"
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  name="message"
                  required
                  multiline
                  rows={4}
                  margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </form>
            </div>
          ) : (
            <button
              className="btn bg-primary text-white"
              onClick={() => setShowForm(true)}
            >
              Contact Me
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact;
