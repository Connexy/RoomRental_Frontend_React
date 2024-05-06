import { Link } from "react-router-dom";

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
                                <label for="#">Username</label>
                                <input type="text" placeholder="Enter Your Username*" />
                            </div>
                            <div class="input-box">
                                <i class='bx bxs-envelope'></i>
                                <label for="#">Email</label>
                                <input type="email" placeholder="Enter Your Email*" />
                            </div>
                            <div class="input-box">
                                <i class='bx bxs-lock-alt'></i>
                                <label for="#">Password</label>
                                <input type="password" placeholder="Enter Your Password*" />
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