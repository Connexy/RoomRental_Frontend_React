
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextInput from "../../Components/TextInput.jsx";
import PasswordInput from '../../Components/PasswordInput';
import { useEffect, useState } from 'react';
import Message from '../../Components/Message';
import { showSuccessMessage } from '../../Utils/Notification';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
        setErrorMessage('');
    }

    const doLogin = (e) => {
        e.preventDefault();
        var isLogin = false;
        if (email === 'admin' && password === 'admin') {


            if (isLogin) {
                localStorage.setItem('isLogin', 1);
                //navigate 
                navigate('/landing-page');
                showSuccessMessage("Login Successful");
            } else {
                setErrorMessage("Invalid email or password ?");
            }
        }

    }
    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === '1') {
            // navigate
            navigate('/landing-page');
        }
    }, [navigate]);


    return (
        <div className="body">
            <div className="main-container">
                <div className="container">
                    <div className="Form login-form">
                        <h2>Login</h2>
                        <form action="#">
                            {errorMessage && <Message message={errorMessage} />}
                            <div className="input-box">
                                <i className='bx bxs-envelope'></i>
                                <TextInput
                                    title="Email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="input-box">
                                <i className='bx bxs-lock-alt'></i>
                                <PasswordInput
                                    title="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Password"
                                />
                            </div>
                            <div className="forgot-section">
                                <span><input type="checkbox" name="" id="checked" />Remember Me</span>
                                <span>Forgot Password ?</span>
                            </div>
                            <button onClick={doLogin} className="btn" id="login-btn">Login</button>
                        </form>
                        <p>Or Sign up using</p>
                        <div className="social-media">
                            <i className='bx bxl-facebook'></i>
                            <i className='bx bxl-google'></i>
                        </div>
                        <p className="RegisterBtn "><Link to="/register-page"> Don't have an account? Sign Up</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Login;