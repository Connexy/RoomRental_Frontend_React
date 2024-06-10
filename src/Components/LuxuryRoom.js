import React from "react";

const LuxuryRoom = ({ image, title, description }) => {
    return (
        <div className="category">
            <div className="image">
                <img style={{ height: "200px" }} src={image} alt="network error"></img>
            </div>
            <h3>{title}</h3>
            <p style={{ color: "#7a7a7a" }}>{description}</p>
        </div>
    );
}
export default LuxuryRoom;