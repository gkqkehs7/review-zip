import React, { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopComponent from '@/components/signinPageComponent/signinComponent/desktopComponent/desktopComponent';
import LargeDesktopComponent from '@/components/signinPageComponent/signinComponent/largeDesktopComponent/largeDesktopComponent';
import LaptopComponent from '@/components/signinPageComponent/signinComponent/laptopComponent/laptopComponent';
import MobileComponent from '@/components/signinPageComponent/signinComponent/mobileComponent/mobileComponent';
import { useNavigate } from 'react-router-dom';
import { PostAxiosInstance } from '@/api/axios.methods';
import { ErrorResponseType, LocalSignInResponse } from '@/types/response.types';

const SigninPage: React.FC = () => {
  const isLargeDesktop: boolean = useMediaQuery({
    query: '(min-width : 1921px)',
  });
  const isDesktop: boolean = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1441px) and (max-width : 1920px)', //1921의 다자인 적용
  });

  const isLaptop: boolean = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1025px) and (max-width : 1440px)', //1921의 다자인 적용
  });

  const isMobile: boolean = useMediaQuery({
    query: '(max-width : 1025px)',
  });

  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const requestSignin = useCallback(async () => {
    try {
      const response = await PostAxiosInstance<LocalSignInResponse>(
        '/v1/auth/local/login',
        {
          email: email,
          password: password,
        },
      );

      const { accessToken, refreshToken } = response.data.result;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/mainPage');
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }, [email, password]);

  const toSignUpPage = () => {
    navigate('/signupPage');
  };

  const toPasswordRecoveryPage = () => {
    navigate('passwordRecoveryPage');
  };

  return (
    <>
      <div>
        {isLargeDesktop && (
          <LargeDesktopComponent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            kakaoLoginUrl={kakaoLoginUrl}
            requestSignin={requestSignin}
            toSignUpPage={toSignUpPage}
            toPasswordRecoveryPage={toPasswordRecoveryPage}
          />
        )}
        {isDesktop && (
          <DesktopComponent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            kakaoLoginUrl={kakaoLoginUrl}
            requestSignin={requestSignin}
            toSignUpPage={toSignUpPage}
            toPasswordRecoveryPage={toPasswordRecoveryPage}
          />
        )}

        {isLaptop && (
          <LaptopComponent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            kakaoLoginUrl={kakaoLoginUrl}
            requestSignin={requestSignin}
            toSignUpPage={toSignUpPage}
            toPasswordRecoveryPage={toPasswordRecoveryPage}
          />
        )}
        {isMobile && (
          <MobileComponent
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            kakaoLoginUrl={kakaoLoginUrl}
            requestSignin={requestSignin}
            toSignUpPage={toSignUpPage}
            toPasswordRecoveryPage={toPasswordRecoveryPage}
          />
        )}
      </div>
    </>
  );
};

export default SigninPage;
