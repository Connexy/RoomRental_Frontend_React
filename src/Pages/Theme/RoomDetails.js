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
                    <img style={{ height: "400px", width: "600px" }} src={detailimage} alt="network error" />
                </div>
                <div class="detail-content">
                    <div class="sub-image">
                        <div class="sub-image-box"></div>
                        <div class="sub-image-box"></div>
                        <div class="sub-image-box"></div>
                    </div>
                    <div class="sub-box">
                        <div><i class="fas fa-money-bill-wave fa-fw"></i> Rs 5000 per month</div>
                        <div><i class="fas fa-map-marker-alt fa-fw"></i> Dhobighat, Lalitpur</div>
                        <div><i class="fas fa-road fa-fw"></i> Nearby Road</div>
                    </div>
                </div>


            </div>

            <div class="room-detail-contents">
                <div class="room-features-content">

                    <div class="room-features">
                        <h2> Room Features</h2>
                        <div class="features-grid">
                            <div><i class="fas fa-bed fa-fw"></i> 2 Bedroom</div>
                            <div><i class="fas fa-bath fa-fw"></i> 1 Bathroom</div>
                            <div><i class="fas fa-ruler-combined fa-fw"></i> Room size 12*12</div>
                            <div><i class="fas fa-wifi fa-fw"></i> Free Wi-Fi</div>
                            <div><i class="fas fa-tv fa-fw"></i> Flat Screen TV</div>
                            <div><i class="fas fa-utensils fa-fw"></i> Kitchen Access</div>
                            <div><i class="fas fa-coffee fa-fw"></i> Complimentary Coffee</div>
                            <div><i class="fas fa-parking fa-fw"></i> Free Parking</div>
                            <div><i class="fas fa-smoking-ban fa-fw"></i> Non-Smoking</div>
                            <div><i class="fas fa-venus-mars fa-fw"></i> Prefered Gender: Doesn't Matter</div>
                        </div>
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

            <div class="location-checkout">
                <div class="room-location">
                    <div class="location-header"><h2>Where it is located</h2></div>
                    <div id="map">
                        <iframe class="map-frame"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.645074638183!2d85.32024431453747!3d27.68230098279939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a1c8b22d4d%3A0x228b22a745a72a9f!2sDhobighat%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1641253411111!5m2!1sen!2snp"
                            style={{ width: "600px", height: "525px", border: "0" }}
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="room-checkout">

                    <div class="checkout-box">
                        <div class="checkout-header"><h2>Contact to House Owner</h2></div>
                        <form class="contact-form">
                            <h3>Contact Form</h3>
                            <div class="form-group">
                                <label for="name">Name *</label>
                                <input type="text" id="name" required />
                            </div>
                            <div class="form-group">
                                <label for="contact-number">Contact number *</label>
                                <input type="number" id="contact-number" />
                            </div>
                            <div class="form-group">
                                <label for="id-upload">Identification Document (Upload any one) *</label>
                                <small>College or Office Card, Citizenship, Passport, Driving license</small>
                                <input type="file" id="id-upload" required />

                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message"></textarea>
                            </div>
                            <button class="contact-form-button" type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}
export default RoomDetails;