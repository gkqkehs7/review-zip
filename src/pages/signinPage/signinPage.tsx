import React from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import DesktopComponent from '@/components/signinPageComponent/signinComponent/desktopComponent/desktopComponent';
import LargeDesktopComponent from '@/components/signinPageComponent/signinComponent/largeDesktopComponent/largeDesktopComponent';
import LaptopComponent from '@/components/signinPageComponent/signinComponent/laptopComponent/laptopComponent';
import MobileComponent from '@/components/signinPageComponent/signinComponent/mobileComponent/mobileComponent';

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

  return (
    <>
      <div>
        {isLargeDesktop && (
          <LargeDesktopComponent kakaoLoginUrl={kakaoLoginUrl} />
        )}
        {isDesktop && <DesktopComponent kakaoLoginUrl={kakaoLoginUrl} />}

        {isLaptop && <LaptopComponent kakaoLoginUrl={kakaoLoginUrl} />}
        {isMobile && <MobileComponent kakaoLoginUrl={kakaoLoginUrl} />}
      </div>
    </>
  );
};

export default SigninPage;
