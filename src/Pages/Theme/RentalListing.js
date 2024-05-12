import RoomCard from '../../Components/RoomCard';
import roomImage from '../../bg.png';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const RentalListing = () => {


    return (
       
        <div>
             
            <Navbar />
            <div class="big-container">
                <div className='heading-text'>
                <h1>Are you looking for rooms ?</h1>
                </div>
                
                <div class="containers">

                    <RoomCard 
                    roomImage ={roomImage}
                    avaliabilityDate="30 May, 2023"
                    location="Dhobighat, Lalitpur"
                    description="Great and suitable room"
                    price = "5000"
                    />
                    <RoomCard 
                    roomImage ={roomImage}
                    avaliabilityDate="1 May, 2023"
                    location="Kumaripati, Lalitpur"
                    description="Great and suitable room"
                    price = "4000"
                    />
                    <RoomCard 
                    roomImage ={roomImage}
                    avaliabilityDate="1 May, 2023"
                    location="Manbhawan, Lalitpur"
                    description="Great and suitable room"
                    price = "3500"
                    />
                    <RoomCard 
                    roomImage ={roomImage}
                    avaliabilityDate="1 May, 2023"
                    location="Nakkhu, Lalitpur"
                    description="Great and suitable room"
                    price = "6000"
                    />
                    <RoomCard 
                    roomImage ={roomImage}
                    avaliabilityDate="1 May, 2023"
                    location="Nakkhu, Lalitpur"
                    description="Great and suitable room"
                    price = "6000"
                    />

                </div>
                <div class="doubt">
                    <h2>Have any doubts or looking for something specific?</h2>
                    <p style={{fontSize: "16px"}}>Our agents are here to help you.</p>
                    <button class="button" id="cont-btn"><Link to='/contact-page'>Contact Us</Link></button>
                </div>
            </div>
            
            <Footer/> 
            
        </div>
        
       

    );
}
export default RentalListing;