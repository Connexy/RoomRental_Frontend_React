import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {showSuccessMessage, showInformationMessage} from '../../Utils/Notification';

const Navbar = () => {
    const navigate = useNavigate();
    const doLogout = () => {
        if (!localStorage.getItem('isLogin')) {
            showInformationMessage("You have already logged out")
        } else {
            showSuccessMessage("Logout successfully");
            localStorage.removeItem('isLogin');
            navigate('/logout-page');
        }
    }

    return (
        <div>
            <div class="navbar">
                <div class="logo">
                    <h1>RoomLess</h1>
                </div>
                <div class="home-content">
                    <ul>
                        <li><Link to='/landing-page'>Home</Link></li>
                        <li><Link to='/rental-listing-page'>Rental Listing</Link></li>
                        <li><Link to='/about-us-page'>About Us</Link></li>
                        <li><Link to='/contact-page'>Contact</Link></li>
                        <div class="dropdown">
                            <i style={{fontSize:"20px", cursor:"pointer"}} class="fa-solid fa-bell"></i>
                            <div class="dropdown-content">
                                <a href="#">noti 1</a>
                                <a href="#">noti 2</a>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="auth">
                    <div class="dropdown">
                        <i class="fa-solid fa-user"></i>
                        <div class="dropdown-content">
                            {/* <Link to='/login-page' >Login</Link> */}
                            <Link to='/user-detail-page' >UserDetail</Link>
                        </div>
                    </div>
                    <i onClick={doLogout} class="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>
        </div>

    );
}
export default Navbar;