import DesktopComponent from '@/components/signinPageComponent/signupComponent/desktopComponent/desktopComponent';
import LaptopComponent from '@/components/signinPageComponent/signupComponent/laptopComponent/laptopComponent';
import LargeDesktopComponent from '@/components/signinPageComponent/signupComponent/largeDesktopComponent/largeDesktopComponent';
import MobileComponent from '@/components/signinPageComponent/signupComponent/mobileComponent/mobileComponent';
import { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { PostAxiosInstance } from '@/api/axios.methods';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const isLargeDesktop: boolean = useMediaQuery({
    query: '(min-width : 1921px)',
  });
  const isDesktop: boolean = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1441px) and (max-width : 1920px) ', //1921의 다자인 적용
  });

  const isLaptop: boolean = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1025px) and (max-width : 1440px)', //1921의 다자인 적용
  });

  const isMobile: boolean = useMediaQuery({
    query: '(max-width : 1025px)',
  });

  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const requestSignup = useCallback(async () => {
    try {
      const response = await PostAxiosInstance('/v1/auth/local/sign-up', {
        email: email,
        phoneNum: phoneNum,
        name: name,
        nickname: nickname,
        password: password,
      });
      navigate('/completeSigninPage');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, name, nickname, phoneNum]);
  return (
    <>
      <div>
        {isLargeDesktop && (
          <LargeDesktopComponent
            email={email}
            setEmail={setEmail}
            phoneNum={phoneNum}
            setPhoneNum={setPhoneNum}
            name={name}
            setName={setName}
            nickName={nickname}
            setNickName={setNickname}
            password={password}
            setPassword={setPassword}
            requestSignup={requestSignup}
          />
        )}
        {isDesktop && (
          <DesktopComponent
            email={email}
            setEmail={setEmail}
            phoneNum={phoneNum}
            setPhoneNum={setPhoneNum}
            name={name}
            setName={setName}
            nickName={nickname}
            setNickName={setNickname}
            password={password}
            setPassword={setPassword}
            requestSignup={requestSignup}
          />
        )}

        {isLaptop && (
          <LaptopComponent
            email={email}
            setEmail={setEmail}
            phoneNum={phoneNum}
            setPhoneNum={setPhoneNum}
            name={name}
            setName={setName}
            nickName={nickname}
            setNickName={setNickname}
            password={password}
            setPassword={setPassword}
            requestSignup={requestSignup}
          />
        )}
        {isMobile && (
          <MobileComponent
            email={email}
            setEmail={setEmail}
            phoneNum={phoneNum}
            setPhoneNum={setPhoneNum}
            name={name}
            setName={setName}
            nickName={nickname}
            setNickName={setNickname}
            password={password}
            setPassword={setPassword}
            requestSignup={requestSignup}
          />
        )}
      </div>
    </>
  );
};

export default SignupPage;
