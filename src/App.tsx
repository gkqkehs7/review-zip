import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/signinPage/signinPage';
import SignupPage from './pages/signupPage/signupPage';
import FindpwdPage from './pages/findpwdPage/findpwdPage';
import ChangepwdPage from './pages/changepwdPage/changepwdPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signinPage" element={<SigninPage />}></Route>
          <Route path="/signupPage" element={<SignupPage />}></Route>
          <Route path="/findpwdPage" element={<FindpwdPage />}></Route>
          <Route path="/findpwdPage2" element={<ChangepwdPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
