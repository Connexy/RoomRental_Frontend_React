import RoomCard from '../../Components/RoomCard';
import roomImage from '../../bg.png';
import Footer from './Footer';
import Navbar from './Navbar';


const RentalListing = () => {


    return (
       
        <div>
             
            <Navbar />
            <div class="big-container">
                <div className='heading-text'>
                <h1>Are you looking for rooms ?</h1>
                </div>
                
                <div class="containers">
                    {/* <div class="card">
                        <div class="image-container">
                            <img src={roomimage} alt="check internet connection" />
                            <div class="availability">Available from 30 May, 2023</div>
                        </div>
                        <p style={{ color: "gray",fontSize: "14px" }}>private room</p>
                        <h3>Dhobighat,Lalitpur</h3>
                        <p style={{fontSize: "16px"}}>Great and suitable room.</p>
                        <div class="price-button">
                            <p style={{ color: "green", fontSize: "20px" }}><b>5000/Night</b></p>
                            <button class="button">Book Now</button>
                        </div>
                    </div> */}

                    <RoomCard 
                    roomimage ={roomImage}
                    avabilityDate="30 May, 2023"
                    location="Dhobighat, Lalitpur"
                    description="Great and suitable room"
                    price = "5000"
                    />
                    <RoomCard 
                    roomimage ={roomImage}
                    avabilityDate="1 May, 2023"
                    location="Kumaripati, Lalitpur"
                    description="Great and suitable room"
                    price = "4000"
                    />
                    <RoomCard 
                    roomimage ={roomImage}
                    avabilityDate="1 May, 2023"
                    location="Manbhawan, Lalitpur"
                    description="Great and suitable room"
                    price = "3500"
                    />
                    <RoomCard 
                    roomimage ={roomImage}
                    avabilityDate="1 May, 2023"
                    location="Nakkhu, Lalitpur"
                    description="Great and suitable room"
                    price = "6000"
                    />

                </div>
                <div class="doubt">
                    <h2>Have any doubts or looking for something specific?</h2>
                    <p style={{fontSize: "16px"}}>Our agents are here to help you.</p>
                    <button class="button" id="cont-btn">Contact Us</button>
                </div>
            </div>
            
            <Footer/> 
            
        </div>
        
       

    );
}
export default RentalListing;