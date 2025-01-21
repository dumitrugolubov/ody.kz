import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Exchange() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.location.href = 'https://www.odyssey.trade/en_US/register?inviteCode=EAATH';
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Redirecting to Odyssey Exchange</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Redirecting to exchange...</p>
      </div>
    </>
  );
}