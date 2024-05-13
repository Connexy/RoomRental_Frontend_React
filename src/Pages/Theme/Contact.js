import Footer from "./Footer";
import Navbar from "./Navbar";
import {useEffect} from 'react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <Navbar />
            <div className="contact-body">
                <h2>Contact US </h2>
                <div class="contact-form">

                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." />

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                    <button type="submit">Submit</button>

                </div>
            </div>
            <Footer />
        </div>
    );

}
export default Contact;