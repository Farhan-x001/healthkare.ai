// pages/index.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return null; // This page does not render anything visible
};

export default IndexPage;
