import Footer from "./Footer";
import Navbar from "./Navbar";
import Aboutus from "../../Components/Aboutus";
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Navbar />
            <Aboutus/>
            <Footer />
        </div>
    );
}
export default AboutUs;<Aboutus/>