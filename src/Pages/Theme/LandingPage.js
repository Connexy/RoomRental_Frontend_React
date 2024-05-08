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
        // <div>
        //     <div class="navbar">
        //         <a href="#" class="logo">Logo</a>
        //         <div class="navbar-buttons">
        //             <button type="button"><Link to='/login-page' >Login</Link></button>
        //             <button  onClick={doLogout}  type="button">Logout</button>
        //         </div>
        //     </div>
        // </div>
        <div>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        
        <header>
        <div class="navbar">
            <div class="logo">
                <h1>RoomLess</h1>
            </div>
            <div class="content">
                <ul>
                    <li>Home</li>
                    <li>Rental Listing</li>
                    <li>Blogs</li>
                    <li>Supports</li>
                </ul>
            </div>
            {/* <!-- <div class="auth">
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-right-from-bracket"></i>
            </div> --> */}
            <div class="auth">
                <div class="dropdown">
                    <i class="fa-solid fa-user"></i>
                    <div class="dropdown-content">
                    <Link to='/login-page' >Login</Link>
                    <Link to='/user-detail-page' >UserDetail</Link>
                    </div>
                </div>
                <i  onClick={doLogout} class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
        <div class="cont">
            <div class="element">
                <h1>The best home everywhere</h1>
                <p>Room bookable directly online</p>
                <div class="searchbox">
                    <input type="text" name="search " placeholder="Enter city"/>
                    <button>Search</button>
                </div>
            </div>
        </div>
    </header>
    </div>
    );
}
export default LandingPage;