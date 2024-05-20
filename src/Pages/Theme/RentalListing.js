import RoomCard from '../../Components/RoomCard';
import room1 from '../../images/image1.jpg';
import room2 from '../../images/image2.jpg';
import room3 from "../../images/image3.jpg";
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import roomsData from '../../room.json';


const RentalListing = () => {

    const images = {
        RI1: room1,
        RI2: room2,
        RI3: room3
    }

    return (

        <div>

            <Navbar />
            <div class="big-container">
                <div className='heading-text'>
                    <h1>Are you looking for rooms ?</h1>
                </div>

                <div class="containers">

                    {roomsData.map((room, index) =>
                        <RoomCard {...room} index={index} roomImage={images[room.roomImage]} />
                    )}

                </div>
                <div class="doubt">
                    <h2>Have any doubts or looking for something specific?</h2>
                    <p style={{ fontSize: "16px" }}>Our agents are here to help you.</p>
                    <button class="button" id="cont-btn"><Link to='/contact-page'>Contact Us</Link></button>
                </div>
            </div>

            <Footer />

        </div>



    );
}
export default RentalListing;