import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from '@/pages/signinPage/signinPage';
import SignupPage from '@/pages/signupPage/signupPage';
import PasswordRecoveryPage from '@/pages/PasswordRecoveryPage/PasswordRecoveryPage';
import ChangePasswordPage from '@/pages/changePasswordPage/changePasswordPage';
import MainPage from '@/pages/mainPage/mainPage';
import SearchPage from '@/pages/searchPage/searchPage';
import CompleteSigninPage from '@/pages/completeSigninPage/completeSigninPage';
import CompleteChangePassword from '@/pages/completeChangePasswordPage/completeChangePasswordPage';
import MyProfilePage from '@/pages/myProfilePage/myProfilePage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signinPage" element={<SigninPage />}></Route>
          <Route path="/signupPage" element={<SignupPage />}></Route>
<<<<<<< HEAD
          <Route
            path="/passwordRecoveryPage"
            element={<PasswordRecoveryPage />}
          ></Route>
          <Route
            path="/changePasswordPage"
            element={<ChangePasswordPage />}
          ></Route>
=======
          <Route path="/passwordRecoveryPage" element={<PasswordRecoveryPage />}></Route>
          <Route path="/changePasswordPage" element={<ChangePasswordPage />}></Route>
>>>>>>> b7aaf0d (Refactor: signinPage)
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route path="/searchPage" element={<SearchPage />}></Route>
          <Route
            path="/completeSigninpage"
            element={<CompleteSigninPage />}
          ></Route>
          <Route
            path="/completeChangePasswordPage"
            element={<CompleteChangePassword />}
          ></Route>
          <Route path="/myProfilePage" element={<MyProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
