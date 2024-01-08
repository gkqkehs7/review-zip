import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signinPage/signinPage';
import SignupPage from './pages/signupPage/signupPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage/PasswordRecoveryPage';
import ChangePasswordPage from './pages/changePasswordPage/changePasswordPage';
import MainPage from './pages/mainPage/mainPage';
import CompleteChangePassword from './pages/CompleteChangePasswordPage/CompleteChangePasswordPage';
import CompleteSigninPage from './pages/CompleteSigninPage/CompleteSigninPage';
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
          <Route
            path="/PasswordRecoveryPage"
            element={<PasswordRecoveryPage />}
          ></Route>
          <Route
            path="/ChangePasswordPage"
            element={<ChangePasswordPage />}
          ></Route>
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route
            path="/CompleteChangePasswordPage"
            element={<CompleteChangePassword />}
          ></Route>
          <Route
            path="/CompleteSigninPage"
            element={<CompleteSigninPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
