'use client'
import React, { useState } from 'react'
import styles from './Footer.module.css'
import { Button, Container, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'

export default function Footer() {
  const [email, setEmail] = useState('');
  const [value, setValue] = useState(0);

  const isInEmailFormatOrEmpty = (email) => {
    // Improved email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) || email == '';
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your logic here to handle the subscription (e.g., API request, state update, etc.)

    if (!isInEmailFormatOrEmpty(email))
      setValue(1);
    else
      setValue(2);

    console.log(`Subscribed with email: ${email}`);
    // Clear the input field after subscription
    setEmail('');
  };

  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContent}>
        <div className={styles.newsletterForm}>
          <h3 className={styles.header}>Stay Informed</h3>
          <p>Subscribe to our newsletter for the latest news and updates.</p>

          <form onSubmit={handleSubscribe} >
            <Typography variant='body1' component="label" htmlFor='email' sx={{ marginRight: '10px' }}>We'll never share your email.</Typography>
            <input
              type="text"
              id="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValue(0);
              }}
              required
              aria-describedby="lname_error"
            />
            <Button variant='contained' type="submit" size='small' sx={{ padding: '2px 8px', margin: '0 20px' }}>Subscribe</Button>
          </form>
          {
            value == 1 && (
              <Alert severity="warning">Wrong email format!</Alert>
            )
          }
          {
            value == 2 && (
              <Alert severity="success">Email is now subscribed!</Alert>
            )
          }
        </div>
      </div>
    </footer>
  )
}