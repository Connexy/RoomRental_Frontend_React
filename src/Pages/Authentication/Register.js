import { Link } from "react-router-dom";
import { useState } from "react";
import TextInput from "../../Components/TextInput.jsx";
import PasswordInput from "../../Components/PasswordInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showSuccessMessage } from '../../Utils/Notification.js'


const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value);
        }

    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const formData = {
            username, email, password
        };
        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            console.log(response.data.message);
            showSuccessMessage("user successfully registered");
            navigate('/login-page');
        } catch (error) {
            console.error("Registration error", error);

        }
    }


    return (
        <div className="body">
            <div className="main-container">
                <div className="container">
                    <div className="Form Register-form">
                        <h2>Register</h2>
                        <form>
                            <div className="input-box">
                                <i className='bx bxs-user'></i>
                                <TextInput
                                    title="Username"
                                    name="username"
                                    value={username}
                                    placeholder="Enter your Username"
                                    onChange={handleInputChange}

                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className='bx bxs-envelope'></i>
                                <TextInput
                                    title="Email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter your Email"
                                    onChange={handleInputChange}

                                    required
                                />
                            </div>
                            <div className="input-box">
                                <i className='bx bxs-lock-alt'></i>
                                <PasswordInput
                                    title="Password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter Your Password"
                                    onChange={handleInputChange}

                                    required
                                />
                            </div>
                            <button className="btn" id="register-btn" onClick={handleRegister}>Register</button>
                        </form>
                        <p>Or Sign up using</p>
                        <div className="social-media">
                            <i className='bx bxl-facebook'></i>
                            <i className='bx bxl-google'></i>
                        </div>
                        <p className="LoginBtn"><Link to="/login-page">Go back to login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
