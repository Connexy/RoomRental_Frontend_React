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

const validateForm = (event) =>{
    const err = {...errorMessage};
    let isValid = true;
    if(username === ''){
        err.username = "Username is required";
        isValid = false;
        } else {
        err.username = '';
        }
    if(email ===''){
        err.email = "Email is required";
        isValid = false;
        } else {
            err.email = '';
        }
    if(password ===''){
        err.password = "Password is required";
        isValid = false;
    } else {
        err.password = '';
    }
    setErrorMessage(err);
    return isValid;
}

const doRegister = () =>{
    if (validateForm()){
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
                                    handleInputChange={handleInputChange}
                                    errorMessage={errorMessage.username}
                                />
                                
                            </div>
                            <div class="input-box">
                            <i class='bx bxs-envelope'></i>
                                <TextInput
                                    title="Email"
                                    name="email"
                                    placeholder="Enter your Email"
                                    handleInputChange={handleInputChange}
                                    errorMessage={errorMessage.email}
                                />
                            </div>
                            <div class="input-box">
                                <i class='bx bxs-lock-alt'></i>
                                <PasswordInput 
                                title = "Password"
                                name="password"
                                placeholder="Enter Your Password"
                                handleInputChange={handleInputChange}
                                errorMessage={errorMessage.password}
                                />
                            </div>
                            <button class="btn" id="register-btn"
                            onClick={doRegister}
                            >Register</button>
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