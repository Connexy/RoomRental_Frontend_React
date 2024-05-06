import logo from './logo.svg';
import './Login.css';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login-page' element={<Login />}/>
        <Route path='/register-page' element={<Register />}/>
        
      </Routes>
      <button ><Link to='/login-page'>click here</Link></button>
      </BrowserRouter>
    </div>
  );
}

export default App;
