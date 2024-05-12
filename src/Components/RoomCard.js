import React from 'react';
import { Link } from 'react-router-dom';


 const RoomCard = ({roomImage, avaliabilityDate, location, description, price }) =>{
     return(
        <div class="card">
        <div class="image-container">
          <Link to='/room-details-page'><img src={roomImage} alt="check internet connection" /></Link>
            <div class="availability">Available from {avaliabilityDate}</div>
        </div>
        <p style={{ color: "gray",fontSize: "14px" }}>private room</p>
        <h3>{location}</h3>
        <p style={{fontSize: "16px"}}>{description}</p>
        <div class="price-button">
            <p style={{ color: "green", fontSize: "18px" }}><b>{price}/Month</b></p>
           <Link to='/room-details-page'><button class="button">Book Now</button></Link> 
        </div>
    </div>

    );
}
export default RoomCard;