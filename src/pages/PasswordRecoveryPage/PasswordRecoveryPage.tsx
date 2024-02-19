import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import LargeDesktopComponent from '@/components/signinPageComponent/passwordRecoveryComponent/largeDesktopComponent/largeDesktopComponent';
import DesktopComponent from '@/components/signinPageComponent/passwordRecoveryComponent/desktopComponent/desktopComponent';
import LaptopComponent from '@/components/signinPageComponent/passwordRecoveryComponent/laptopComponent/laptopComponent';
import MobileComponent from '@/components/signinPageComponent/passwordRecoveryComponent/mobileComponent/mobileComponent';

const PasswordRecoveryPage: React.FC = () => {
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

  return (
    <>
      <div>
        {isLargeDesktop && <LargeDesktopComponent />}
        {isDesktop && <DesktopComponent />}

        {isLaptop && <LaptopComponent />}
        {isMobile && <MobileComponent />}
      </div>
    </>
  );
};

export default PasswordRecoveryPage;
