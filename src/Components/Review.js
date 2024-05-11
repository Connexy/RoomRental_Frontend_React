const Review = ({text,reviewerName}) =>{
    return (
        <div class="review-card">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <p style={{marginLeft:"0px"}}>{text}</p>
            <span className="review-name">{reviewerName}</span>
        </div>
    );

}
export default Review;