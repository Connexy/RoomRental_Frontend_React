
export const DetailImage = ({ roomdetailimage, price, location, nearBy }) => {
    return (
        <div className="room_Detail_image">

            <div class="detail-image">
                <img style={{ height: "400px", width: "600px" }} src={roomdetailimage} alt="network error" />
            </div>
            <div class="detail-content">
                <div class="sub-image">
                    <div class="sub-image-box">
                        <img src={roomdetailimage} style={{height:"150px", width: "200px"}} alt=" url error"/>
                    </div>
                    <div class="sub-image-box">
                    <img src={roomdetailimage} style={{height:"150px", width: "200px"}} alt=" url error"/>
                    </div>
                    <div class="sub-image-box">
                    <img src={roomdetailimage} style={{height:"150px", width: "200px"}} alt=" url error"/>
                    </div>
                </div>
                <div class="sub-box">
                    <div><i class="fas fa-money-bill-wave fa-fw"></i> Rs {price} per month</div>
                    <div><i class="fas fa-map-marker-alt fa-fw"></i>{location}</div>
                    <div><i class="fas fa-road fa-fw"></i> Nearby {nearBy}</div>
                </div>
            </div>
        </div>
    );
}

