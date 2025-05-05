import React from 'react';

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/api/v1/auth/google';
  };

  return (
    <button
      onClick={handleGoogleLogin}
      style={{
        padding: '14px 24px',
        backgroundColor: '#ffffff',
        color: '#444',
        border: '1px solid #ddd',
        borderRadius: '12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: 'Arial, Helvetica, sans-serif',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#f7f7f7';
        e.currentTarget.style.transform = 'scale(1.03)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label="Google로 계속하기"
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google 로고"
        style={{ width: 24, height: 24 }}
      />
      Google로 로그인
    </button>
  );
};

export default GoogleLoginButton;
