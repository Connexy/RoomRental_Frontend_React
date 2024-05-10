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
                    <p><strong>Name:</strong> Kenneth Valdez</p>
                    <p><strong>Email:</strong> email@example.com</p>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                    <p><strong>Mobile:</strong> +1 234 567 891</p>
                    <p><strong>Address:</strong> 1234 Street, City, State, Country</p>
                    <button class="buttonedit">Edit</button>
                </div>


            </div>
            </div>
            <Footer />
        </div>
    );

}
export default UserDetail;