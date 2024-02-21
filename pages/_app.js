// pages/_app.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoginPage from '../components/LoginPage';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  // If user is not authenticated, render LoginPage
  if (!isAuthenticated && router.pathname === '/login') {
    return <LoginPage setIsAuthenticated={setIsAuthenticated} />;
  }

  // If user is authenticated or on a route other than login, render the requested page
  return <Component {...pageProps} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

export default MyApp;
