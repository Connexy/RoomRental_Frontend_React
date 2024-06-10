
import { useNavigate } from 'react-router-dom';
const RoomCard = ({ index, roomImage, avaliabilityDate, location, description, price }) => {
    const navigate = useNavigate();
    const goDetailPage = () => {
        navigate(`/room-details-page/${index}`);
    }
    return (
        <div className="card">
            <div className="image-container">
                <img src={roomImage} alt="check internet connection" />
                <div className="availability">Available from {avaliabilityDate}</div>
            </div>
            <p style={{ color: "gray", fontSize: "14px" }}>private room</p>
            <h3>{location}</h3>
            <p style={{ fontSize: "16px" }}>{description}</p>
            <div className="price-button">
                <p style={{ color: "green", fontSize: "18px" }}><b>{price}/Month</b></p>
                <button onClick={goDetailPage} className="button">View Details</button>
            </div>
        </div>

    );
}
export default RoomCard;