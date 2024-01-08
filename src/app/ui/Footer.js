'use client'
import React, { useState } from 'react'
import styles from './Footer.module.css'
import { Button, Container, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your logic here to handle the subscription (e.g., API request, state update, etc.)
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
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-errormessage='Email format is incorrect'
              aria-invalid='true'
              aria-required
            />
            <Button variant='contained' type="submit" size='small' sx={{ padding: '2px 8px', margin: '0 20px' }}>Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  )
}