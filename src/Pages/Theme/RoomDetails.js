import Footer from "./Footer";
import Navbar from "./Navbar";
import detailimage from '../../bg.png';

const RoomDetails = () => {
    return (
        <div>
            <Navbar />
            <div class="room-detail-headings">
                <h1>Room Details</h1>
            </div>
            <div class="detail-container">
                <div class="detail-image">
                    <img style={{height:"350px", width: "600px"}}  src={detailimage} alt="network error" />
                </div>
                <div class="detail-content">
                    <h2>Casa lin - room 1</h2>
                    <p>Dhobighat-4, Lalitpur</p>
                    <p class="roomdetail-availability">Available from 2021, Dec 28</p>
                    <p class="price">5000/month <span>utilities included</span></p>
                    <h3>Payment Methods</h3>
                    <div class="payment-methods">
                        <div class="payment-option">
                            <input type="radio" id="bank" name="payment" value="bank" />
                            <label for="bank">Cash in hand</label>
                        </div>

                        <div class="payment-option">
                            <input type="radio" id="esewa" name="payment" value="esewa" />
                            <label for="esewa">Esewa</label>
                        </div>
                        <div class="payment-option">
                            <input type="radio" id="khalti" name="payment" value="khalti" />
                            <label for="khalti">Khalti</label>
                        </div>
                    </div>

                    <button class="btn-book">Book Now</button>
                </div>
            </div>

            <div class="room-detail-contents">
                <div class="room-features-content">

                    <div class="room-features">
                        <h2> Room Features</h2>
                        <div class="features-grid">
                            <div><i class="fas fa-bed fa-fw"></i> 2 Bedroom</div>
                            <div><i class="fas fa-bath fa-fw"></i> 2 Bathroom</div>
                            <div><i class="fas fa-wifi fa-fw"></i> Free Wi-Fi</div>
                            <div><i class="fas fa-tv fa-fw"></i> Flat Screen TV</div>
                            <div><i class="fas fa-utensils fa-fw"></i> Kitchen Access</div>
                            <div><i class="fas fa-coffee fa-fw"></i> Complimentary Coffee</div>
                            <div><i class="fas fa-parking fa-fw"></i> Free Parking</div>
                            <div><i class="fas fa-smoking-ban fa-fw"></i> Non-Smoking</div>
                        </div>
                    </div>



                    <div class="room-description">
                        <h2> Room Description</h2>
                        <div class="room-description-text">

                            <p>The room is spacious with a large window that offers a stunning view of the city skyline.</p>
                            <p>It features a comfortable double bed with a premium mattress to ensure a good night's sleep.</p>
                            <p>The room has a bathroom with a walk-in shower, fresh towels, and complimentary toiletries.</p>
                            <p>There's a work desk with a lamp and a chair, making it a perfect spot for business travelers.</p>
                            <p>The room is equipped with a flat-screen TV and free Wi-Fi for your entertainment.</p>
                            <p>A small kitchenette area includes a mini-fridge, and a coffee maker for your convenience.</p>

                        </div>
                    </div>

                </div>
                <div class="room-location">
                    <div class="location-header">Where it is located</div>
                    <div id="map">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.645074638183!2d85.32024431453747!3d27.68230098279939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a1c8b22d4d%3A0x228b22a745a72a9f!2sDhobighat%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1641253411111!5m2!1sen!2snp"
                            style={{ width: "600px", height: "450px", border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default RoomDetails;