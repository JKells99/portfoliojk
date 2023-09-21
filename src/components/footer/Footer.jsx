import React from 'react';
import { Typography, Container, AppBar, Toolbar, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="static" className="footer ">
      <Toolbar>
        <Container maxWidth="sm" >
          <Typography variant="body1" className='pb-4 fs-3 '>
            &copy; {currentYear} Jordan Kelloway. All rights reserved.
          </Typography>
          <Typography variant="body1" component="p" >
            Location: Carbonear, Newfoundland And Labrador
          </Typography>
          <Typography variant="body1" component="p">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42937.83573542201!2d-53.22749064999999!3d47.730726149999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b7351a364cd7259%3A0x13ab8abcfc20cad4!2sCarbonear%2C%20NL!5e0!3m2!1sen!2sca!4v1694278957281!5m2!1sen!2sca" width="300" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Typography>
          <div className="social-icons ">
            <IconButton
              className="social-icon"
              color="inherit"
              aria-label="Facebook"
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              className="social-icon"
              color="inherit"
              aria-label="Twitter"
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              className="social-icon"
              color="inherit"
              aria-label="Instagram"
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              className="social-icon"
              color="inherit"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </IconButton>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};


export default Footer