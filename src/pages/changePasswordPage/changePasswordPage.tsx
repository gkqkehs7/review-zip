import { useMediaQuery } from 'react-responsive';
import LargeDesktopComponent from '@/components/signinPageComponent/changePasswordComponent/largeDesktopComponent/largeDesktopComponent';
import DesktopComponent from '@/components/signinPageComponent/changePasswordComponent/desktopComponent/desktopComponent';
import LaptopComponent from '@/components/signinPageComponent/changePasswordComponent/laptopComponent/laptopComponent';
import MobileComponent from '@/components/signinPageComponent/changePasswordComponent/mobileComponent/mobileveComponent';
import { useState } from 'react';

const ChangePasswordPage: React.FC = () => {
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

  const [newPassword, setNewPassword] = useState<string>('');
  const [reEnterPassword, setReEnterPassword] = useState<string>('');

  return (
    <>
      <div>
        {isLargeDesktop && (
          <LargeDesktopComponent
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            reEnterPassword={reEnterPassword}
            setReEnterPassword={setReEnterPassword}
          />
        )}
        {isDesktop && (
          <DesktopComponent
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            reEnterPassword={reEnterPassword}
            setReEnterPassword={setReEnterPassword}
          />
        )}

        {isLaptop && (
          <LaptopComponent
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            reEnterPassword={reEnterPassword}
            setReEnterPassword={setReEnterPassword}
          />
        )}
        {isMobile && (
          <MobileComponent
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            reEnterPassword={reEnterPassword}
            setReEnterPassword={setReEnterPassword}
          />
        )}
      </div>
    </>
  );
};

export default ChangePasswordPage;
