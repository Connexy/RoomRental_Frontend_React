import Navbar from "./Navbar";
import Footer from "./Footer";


const UserDetail = () => {
    return (
        <div>
            
                <Navbar/>
                <div>
                
            <div class="large_container">
                
                <div class="user_profile">
                    <div class="avatar">

                    </div>
                    <div class="name">Kiswor Chhetri</div>
                    <div class="profession">Full Stack Developer</div>
                    <button class="buttonfollow">Follow</button>
                </div>
                <div class="user_details">
                    <div className="user_heading">
                    <h3>User Details</h3>
                    </div>
                    <p><strong>Name:</strong> Kiswor Chhetri</p>
                    <p><strong>Email:</strong> kisworchhetri.2001@example.com</p>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                    <p><strong>Mobile:</strong> +977 9741710841</p>
                    <p><strong>Address:</strong> Afaldol Dhobighat, Lalitpur, Bagmati, Nepal</p>
                    <button class="buttonedit">Edit</button>
                </div>


            </div>
            </div>
            <Footer />
        </div>
    );

}
export default UserDetail;