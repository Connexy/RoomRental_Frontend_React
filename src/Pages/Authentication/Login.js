
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import PasswordInput from '../../Components/PasswordInput';
import { useEffect, useState } from 'react';
import Message from '../../Components/Message';
import {showSuccessMessage} from '../../Utils/Notification';



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
    }

    const doLogin = (e) => {

        let isLogin = false;
        if (email == "admin" && password == "admin") {
            isLogin = true;
            console.log("login successful");

        }

        if (isLogin) {
            localStorage.setItem('isLogin', 1);
            //navigate 
            navigate('/landing-page');
            showSuccessMessage("Login Successful");
        } else {
            setErrorMessage("Invalid email or password ?");
        }
    }

    useEffect(() => {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === '1') {
           // navigate
            navigate('/landing-page');
        }
    }, []);

    return (
        <div className="body">
            <link rel="stylesheet" href="Login.css"></link>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div class="main-container">
                <div class="container">
                    <div class="Form login-form">
                        <h2>Login</h2>
                        <form action="#">
                            {errorMessage && <Message message={errorMessage} />}
                            <div class="input-box">
                                <i class='bx bxs-envelope'></i>
                                <TextInput
                                    title="Email"
                                    name="email"
                                    value={email}
                                    handleInputChange={handleInputChange}
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div class="input-box">
                                <i class='bx bxs-lock-alt'></i>
                                <PasswordInput
                                    title="Password"
                                    name="password"
                                    value={password}
                                    handleInputChange={handleInputChange}
                                    placeholder="Enter Your Password"
                                />
                            </div>
                            <div class="forgot-section">
                                <span><input type="checkbox" name="" id="checked" />Remember Me</span>
                                <span>Forgot Password ?</span>
                            </div>
                            <button onClick={doLogin} class="btn" id="login-btn">Login</button>
                        </form>
                        <p>Or Sign up using</p>
                        <div class="social-media">
                            <i class='bx bxl-facebook'></i>
                            <i class='bx bxl-google'></i>
                        </div>
                        <p class="RegisterBtn "><Link to="/register-page"> Don't have an account? Sign Up</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Login;