import Footer from "./Footer";
import Navbar from "./Navbar";
import {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {showSuccessMessage} from "../../Utils/Notification";

const Contact = () => {

const navigate = useNavigate();
const [formData, setFormData] = useState ({
    firstname: "", 
    lastname: "",
    email: "",
    message: "",
});

const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value});
};

const handleSubmit = () =>{
    console.log(formData);
    showSuccessMessage("Thank you for your message our member will contact you soon");
    navigate('/landing-page');
    
}

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
                    <input onChange={handleChange} type="text" id="fname" name="firstname" placeholder="Your first name.." />

                    <label for="lname">Last Name</label>
                    <input onChange={handleChange} type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="email">Email</label>
                    <input onChange={handleChange} type="email" id="email" name="email" placeholder="Your email.." />

                    <label for="message">Message</label>
                    <textarea onChange={handleChange} id="message" name="message" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                    <button 
                    onClick={handleSubmit}
                    type="submit">Submit</button>

                </div>
            </div>
            <Footer />
        </div>
    );

}
export default Contact;