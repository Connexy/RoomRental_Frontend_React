import './App.css';
import './Login.css';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/Theme/LandingPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login-page' element={<Login />}/>
        <Route path='/logout-page' element={<Login />}/>
        <Route path='/register-page' element={<Register />}/>
        <Route path='/landing-page' element={<LandingPage />}/>
      </Routes>
    
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
