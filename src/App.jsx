import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './Components/SignInPage/SignInPage';
import LayoutPage from './Components/Layout/LayoutPage';
import Signup from './pages/signup';
import OtpVerification from './pages/otpverification';
import FinishSignup from './pages/finishsignup';
import HomePage from './pages/homepage';
import ThreePartMultipage from './pages/multipage';
import UploadPhoto from './pages/uploadphoto';
import DisplayPhoto from './pages/displayphoto';
// admin section
import AdminSignInPage from './AdminPanel/SignInPage/SignInPage'
import AdminPanelSidenav from './AdminPanel/Sidenav/AdminPanelSidenav'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const primaryColorFromBackend = '#853836';
    document.documentElement.style.setProperty('--primary-color', primaryColorFromBackend);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/merchant' element={<LayoutPage />} />
          <Route path='/customer' element={<LayoutPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<OtpVerification />} />
          <Route path='/finish' element={<FinishSignup />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/multipage' element={<ThreePartMultipage />} />
          <Route path='/uploadphoto' element={<UploadPhoto />} />
          <Route path='/displayphoto' element={<DisplayPhoto />} />
          <Route path='/admin/signin' element={<AdminSignInPage />} />
          <Route path='/admin/dashboard' element={<AdminPanelSidenav />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
