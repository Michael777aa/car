import React from 'react';

const NaverLoginButton = () => {
  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:3000/api/v1/auth/naver';
  };

  return (
    <button
      onClick={handleNaverLogin}
      style={{
        padding: '17px 24px',
        backgroundColor: '#03C75A',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        fontSize: '15px',
        fontWeight: 600,
        fontFamily: 'Apple SD Gothic Neo, Noto Sans KR, sans-serif',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#02B154';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#03C75A';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      aria-label="네이버 계정으로 로그인"
    >
      <img
        src="https://static.nid.naver.com/oauth/small_g_in.PNG"
        alt="네이버 로고"
        style={{ width: 20, height: 20 }}
      />
      네이버로 로그인
    </button>
  );
};

export default NaverLoginButton;
