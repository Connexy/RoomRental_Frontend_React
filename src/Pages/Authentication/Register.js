import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import PasswordInput from "../../Components/PasswordInput";
import { useState } from "react";
import { showSuccessMessage } from "../../Utils/Notification";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = (event) => {
        const err = { ...errorMessage };
        let isValid = true;
        if (username === '') {
            err.username = "Username is required";
            isValid = false;
        } else {
            err.username = '';
        }
        if (email === '') {
            err.email = "Email is required";
            isValid = false;
        } else {
            err.email = '';
        }
        if (password === '') {
            err.password = "Password is required";
            isValid = false;
        } else {
            err.password = '';
        }
        setErrorMessage(err);
        return isValid;
    }

    const doRegister = () => {
        if (validateForm()) {
            showSuccessMessage("User Registerd Successfully");
            navigate('/login-page');

        }
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setErrorMessage(prevState => ({ ...prevState, [name]: '' })); // clear the error message for this field
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    return (
        <div className="body">


            <div className="main-container">
                <div className="container">
                    <div className="Form Register-form">
                        <h2>Register</h2>
                        <form action="#">
                            <div className="input-box">
                                <i className='bx bxs-user'></i>
                                <TextInput
                                    title="Username"
                                    name="username"
                                    placeholder="Enter your Username"
                                    onChange={handleInputChange}
                                    errorMessage={errorMessage.username}
                                    required
                                />

                            </div>
                            <div className="input-box">
                                <i className='bx bxs-envelope'></i>
                                <TextInput
                                    title="Email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    onChange={handleInputChange}
                                    errorMessage={errorMessage.email}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className='bx bxs-lock-alt'></i>
                                <PasswordInput
                                    title="Password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    onChange={handleInputChange}
                                    errorMessage={errorMessage.password}
                                    required
                                />
                            </div>
                            <button className="btn" id="register-btn"
                                onClick={doRegister}
                            >Register</button>
                        </form>
                        <p>Or Sign up using</p>
                        <div className="social-media">
                            <i className='bx bxl-facebook'></i>
                            <i className='bx bxl-google'></i>
                        </div>
                        <p className="LoginBtn"><Link to="/login-page" >Go back to login</Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Register;