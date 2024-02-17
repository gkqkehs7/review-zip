import { useCallback, useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';
import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from '@/api/axios.methods';
import { useNavigate } from 'react-router-dom';

const MobileComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const requestSignup = useCallback(async () => {
    try {
      const data = {
        email: email,
        password: password,
        name: name,
        nickname: nickname,
        phoneNum: phoneNum,
      };
      const response = await PostAxiosInstance('/v1/auth/local/sign-up', data);
      navigate('/completeSigninPage');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, name, nickname, phoneNum]);

  return (
    <styles.Container>
      <styles.InputContainer>
        {/* 휴대폰 번호입력 */}
        <styles.InputTitle>
          이메일 주소
          <styles.CheckEmail>중복된 이메일입니다</styles.CheckEmail>
        </styles.InputTitle>
        <styles.Input
          type="email"
          placeholder="Enter your Email Adress"
          value={email}
          pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeInputValue(e, setEmail)
          }
        />
      </styles.InputContainer>
      <styles.InputContainer>
        {/* 휴대폰 번호입력 */}
        <styles.InputTitle>
          휴대폰 번호
          <styles.CheckPhoneNum>
            이미 가입된 휴대폰번호 입니다
          </styles.CheckPhoneNum>
        </styles.InputTitle>
        <styles.Input
          type="tel"
          placeholder="Enter your Phone Number"
          value={phoneNum}
          pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeInputValue(e, setPhoneNum)
          }
        />
      </styles.InputContainer>

      <styles.InputContainer>
        {/* 사용자 성명입력 */}
        <styles.InputTitle>성명</styles.InputTitle>
        <styles.Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeInputValue(e, setName)
          }
        />
      </styles.InputContainer>

      <styles.InputContainer>
        {/* 사용자 닉네임 입력 */}
        <styles.InputTitle>
          사용자 닉네임
          <styles.CheckNickName>
            이미 사용중인 닉네임입니다
          </styles.CheckNickName>
        </styles.InputTitle>
        <styles.Input
          type="text"
          placeholder="Enter user name"
          value={nickname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeInputValue(e, setNickname)
          }
        />
      </styles.InputContainer>

      <styles.InputContainer>
        {/* 비밀번호 입력 */}
        <styles.InputTitle>
          비밀번호
          <styles.CheckPassWord>
            이미 사용중인 비밀번호입니다
          </styles.CheckPassWord>
        </styles.InputTitle>
        <styles.Input
          type="password"
          placeholder="Enter Password"
          value={password}
          pattern="/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6,}$/;"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeInputValue(e, setPassword)
          }
        />
        {/* 비밀번호 입력시 주의사항 */}
        <styles.WarnText>
          대문자 ,소문자가섞인 영문 6글자 이상 입력해주시길 바랍니다.
        </styles.WarnText>
      </styles.InputContainer>

      {/* 회원가입 완료Link */}
      <styles.SignUpBtn onClick={requestSignup}>&gt; SIGN UP</styles.SignUpBtn>

      {/* 로그인 페이지로 가는 Link */}
      <styles.SignInContainer>
        <p>계정이 있으신가요?</p>
        <styles.SignInBtn to="/signInPage">로그인</styles.SignInBtn>
      </styles.SignInContainer>
    </styles.Container>
  );
};

export default MobileComponent;
