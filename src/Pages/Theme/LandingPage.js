import Footer from "./Footer";
import lux1 from '../../images/image1.jpg';
import lux2 from '../../images/image2.jpg';
import lux3 from '../../images/image3.jpg';
import lux4 from '../../images/image1.jpg';
import LuxuryRoom from "../../Components/LuxuryRoom";
import Review from "../../Components/Review";
import Navbar from "./Navbar";
import { useEffect } from "react";


const LandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>

            <header>
                <Navbar />
                <div class="cont">
                    <div class="element">
                        <h1 style={{ fontWeight: "bolder" }}>The best home everywhere</h1>
                        <p style={{ fontSize: "20px", fontWeight: "bolder" }} >Room bookable directly online</p>
                        <div class="searchbox">
                            <input type="text" name="search " placeholder="Enter city" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </header>

            <div class="section">
                <h1>Find the apartments that fits your lifestyle</h1>
                <p style={{ marginLeft: "30px", color: "#7a7a7a" }}>We have a solution for every needs</p>

                <div class="categories">

                    <LuxuryRoom
                        image={lux1}
                        title="Luxury Rooms"
                        description="Detail and finishes of excellence, unique properties complete with every service"
                    />

                    <LuxuryRoom
                        image={lux2}
                        title="Premium Rooms"
                        description="Detail and finishes of excellence, unique properties complete with every service"
                    />

                    <LuxuryRoom
                        image={lux3}
                        title="Benifitted Rooms"
                        description="Detail and finishes of excellence, unique properties complete with every service"
                    />
                    <LuxuryRoom
                        image={lux4}
                        title="Super Rooms"
                        description="Detail and finishes of excellence, unique properties complete with every service"
                    />



                </div>
            </div>
            <div class="safety-section">
                <h1>Rent Safely</h1>
                <p style={{ marginLeft: "30px" }}>Our team is at your disposal to help you find the ideal accommodation. Rent online in total comfort.</p>
                <div class="safety">
                    <div class="section1">
                        <i class="fas fa-home"></i>
                        <h3>Verified apartment</h3>
                        <p>Our apartments are checked before listing to ensure they meet our standards.</p>
                    </div>
                    <div class="section2">
                        <i class="fas fa-mouse-pointer"></i>
                        <h3>Rent with one click</h3>
                        <p>Our online rental process is quick and easy. Just one click and you're done!</p>
                    </div>
                    <div class="section3">
                        <i class="fas fa-users"></i>
                        <h3>A team dedicated to you</h3>
                        <p>We have a dedicated team ready to assist you with any queries or issues.</p>
                    </div>
                </div>
            </div>

            <section class="reviews-section">
                <h1 style={{ marginLeft: "30px" }}>Guaranteed by our reviews</h1>
                <p style={{ marginLeft: "30px", color: "#7A7A7A" }}>Our customers are 100% satisfied and our reviews speak for us!</p>
                <div class="review-box">

                    <Review
                        text="It was great and I found... room found suitable as I want"
                        reviewerName="Kiswor Chhetri"
                    />
                    <Review
                        text="It was great and I found... room found suitable as I want"
                        reviewerName="Ram Bahadur"
                    />
                    <Review
                        text="It was great and I found... room found suitable as I want"
                        reviewerName="Shyam Bahadur"
                    />
                    <Review
                        text="It was great and I found... room found suitable as I want"
                        reviewerName="Shyam Bahadur"
                    />
                    <Review
                        text="It was great and I found... room found suitable as I want"
                        reviewerName="Shyam Bahadur"
                    />
                    <Review
                        text="It was great and I found... room found suitable as I want"
                        reviewerName="Shyam Bahadur"
                    />



                </div>

            </section>

            <div class="count-container">
                <div class="stat">
                    <i class="fas fa-heart"></i>
                    <div class="count">45793</div>
                    <div>Happy Tenants</div>
                </div>
                <div class="stat">
                    <i class="fas fa-key"></i>
                    <div class="count">45382</div>
                    <div>Rooms Rented</div>
                </div>
                <div class="stat">
                    <i class="fas fa-building"></i>
                    <div class="count">54762</div>
                    <div>Properties Listed</div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default LandingPage;