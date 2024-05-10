import React  from "react";

const LuxuryRoom = ({image, title, description}) =>{
    return(
        <div class="category">
            <div class="image">
                <img src={image} alt="network error"></img>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
    );
}
export default LuxuryRoom;