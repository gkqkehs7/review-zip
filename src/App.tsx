import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from '@/pages/signinPage/signinPage';
import SignupPage from '@/pages/signupPage/signupPage';
import PasswordRecoveryPage from '@/pages/PasswordRecoveryPage/PasswordRecoveryPage';
import ChangePasswordPage from '@/pages/changePasswordPage/changePasswordPage';
import MainPage from '@/pages/mainPage/mainPage';
import SearchPage from '@/pages/searchPage/searchPage';
import MyProfilePage from '@/pages/myProfilePage/myProfilePage';
import UploadPage from '@/pages/uploadPage/uploadPage';
import TestPage from '@pages/testPage/testPage';
import HashtagPage from '@pages/hashtagPage/hashtagPage';
import FreindProfilePage from '@/pages/friendProfilePage/freindProfilePage';
import KakaoLoginPage from './pages/kakaoLoginPage/kakaoLoginPage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MapPage from './pages/mapPage/mapPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signinPage" element={<SigninPage />}></Route>
          <Route path="/signupPage" element={<SignupPage />}></Route>
          <Route path="/kakaoLogin" element={<KakaoLoginPage />}></Route>
          <Route
            path="/passwordRecoveryPage"
            element={<PasswordRecoveryPage />}
          ></Route>
          <Route
            path="/changePasswordPage"
            element={<ChangePasswordPage />}
          ></Route>
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route path="/searchPage" element={<SearchPage />}></Route>
          <Route path="/uploadPage" element={<UploadPage />}></Route>
          <Route path="/myProfilePage" element={<MyProfilePage />}></Route>
          <Route path="/testPage" element={<TestPage />}></Route>
          <Route path="/hashtagPage" element={<HashtagPage />}></Route>
          <Route
            path="/friendProfilePage"
            element={<FreindProfilePage />}
          ></Route>
          <Route path="/mapPage" element={<MapPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
