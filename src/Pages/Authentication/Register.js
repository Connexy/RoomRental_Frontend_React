import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/PasswordInput";

const Register = () => {
    return (
        <div className="body">
            <link rel="stylesheet" href="Login.css"></link>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div class="main-container">
                <div class="container">
                    <div class="Form Register-form">
                        <h2>Register</h2>
                        <form action="#">
                            <div class="input-box">
                                <i class='bx bxs-user'></i>
                                <TextInput
                                    title="Username"
                                    name="username"
                                    placeholder="Enter your Username"
                                />
                            </div>
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
                            <button class="btn" id="register-btn">Register</button>
                        </form>
                        <p>Or Sign up using</p>
                        <div class="social-media">
                            <i class='bx bxl-facebook'></i>
                            <i class='bx bxl-google'></i>
                        </div>
                        <p class="LoginBtn"><Link to="/login-page" >Go back to login</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Register;