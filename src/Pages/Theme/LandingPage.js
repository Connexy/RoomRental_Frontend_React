import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

const navigate = useNavigate();
const doLogout = () =>{
    toast.success('Logout success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    localStorage.removeItem('isLogin');
    navigate('/logout-page');
}

    return (
        <div>
            <div class="navbar">
                <a href="#" class="logo">Logo</a>
                <div class="navbar-buttons">
                    <button type="button"><Link to='/login-page' >Login</Link></button>
                    <button  onClick={doLogout}  type="button">Logout</button>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;