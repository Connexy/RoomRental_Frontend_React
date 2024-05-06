import { FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import PasswordInput from '../../Components/PasswordInput';



const Login = () => {
    return (
        <div className="body">
            <link rel="stylesheet" href="Login.css"></link>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div class="main-container">
                <div class="container">
                    <div class="Form login-form">
                        <h2>Login</h2>
                        <form action="#">
                            <div class="input-box">
                            <i class='bx bxs-envelope'></i>
                                <TextInput
                                    title="Email"
                                    name="email"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div class="input-box">
                                <i class='bx bxs-lock-alt'></i>
                                <PasswordInput 
                                title = "Password"
                                name="password"
                                placeholder="Enter Your Password"
                                />
                            </div>
                            <div class="forgot-section">
                                <span><input type="checkbox" name="" id="checked" />Remember Me</span>
                                <span><a href="#">Forgot Password ?</a></span>
                            </div>
                            <button class="btn" id="login-btn">Login</button>
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