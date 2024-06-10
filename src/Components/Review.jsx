import userimage from "../images/avatar.png";

const Review = ({ text, reviewerName }) => {
    return (
        <div className="review-card">
            <div className="rev-img">
                <img style={{ height: "100px", width: "100px" }} src={userimage} alt="network error" />
            </div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <p style={{ marginLeft: "0px", color: "#7a7a7a" }}>{text}.</p>
            <span className="review-name">{reviewerName}</span>
        </div>
    );

}
export default Review;