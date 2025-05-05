import React from 'react';

const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:3000/api/v1/auth/kakao';
  };

  return (
    <button
      onClick={handleKakaoLogin}
      style={{
        padding: '14px 24px',
        backgroundColor: '#FEE500',
        color: '#000000',
        border: 'none',
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
        e.currentTarget.style.backgroundColor = '#f7e500';
        e.currentTarget.style.transform = 'scale(1.03)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#FEE500';
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label="카카오로 로그인"
    >
   <img
        src="/assets/images/5f9c58c2017800001.png"  // Update this path based on where you save the image
        alt="카카오 로고"
        style={{ width: 24, height: 24 }}
      />
      카카오로 로그인
    </button>
  );
};

export default KakaoLoginButton;
