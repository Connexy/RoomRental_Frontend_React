import React from 'react';



 const RoomCard = ({roomImage, avaliabilityDate, location, description, price }) =>{
     return(
        <div class="card">
        <div class="image-container">
            <img src={roomImage} alt="check internet connection" />
            <div class="availability">Available from {avaliabilityDate}</div>
        </div>
        <p style={{ color: "gray",fontSize: "14px" }}>private room</p>
        <h3>{location}</h3>
        <p style={{fontSize: "16px"}}>{description}</p>
        <div class="price-button">
            <p style={{ color: "green", fontSize: "18px" }}><b>{price}/Month</b></p>
            <button class="button">Book Now</button>
        </div>
    </div>

    );
}
export default RoomCard;