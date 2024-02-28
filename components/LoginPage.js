// components/LoginPage.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LoginPage.module.css';

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const predefinedEmail = 'test@example.com';
    const predefinedPassword = 'password';

    
    if (email === predefinedEmail && password === predefinedPassword) {
      //  successful login
      setIsAuthenticated(true);
    
      router.push('/home');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div>
     
      <img src="/images/doctors.png" alt="Logo" className={styles.image1} />
      <img src="/images/left.png" alt="Logo" className={styles.image2} />
      <img src="/images/right.png" alt="Logo" className={styles.image3} />

      <div className={styles.head}><h1>Healthkare.ai</h1></div>
      <div className={styles.container}>
        <h2 style={{textAlign: 'center'}}>Login Page</h2>
        <label htmlFor="email">Username or Email Address:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailValid(true);
          }}
          className={`${styles.input} ${!emailValid && styles.invalid}`}
         
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLogin} className={styles.button}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
