import userimage from "../images/avatar.png";

const Review = ({ text, reviewerName }) => {
    return (
        <div class="review-card">
            <div className="rev-img">
                <img style={{ height: "100px", width: "100px" }} src={userimage} alt="network error" />
            </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p style={{ marginLeft: "0px" }}>{text}.</p>
            <span className="review-name">{reviewerName}</span>
        </div>
    );

}
export default Review;