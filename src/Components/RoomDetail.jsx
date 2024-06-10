
export const DetailImage = ({ roomdetailimage, price, location, nearBy }) => {
    return (
        <div classNameName="room_Detail_image">

            <div className="detail-image">
                <img style={{ height: "400px", width: "600px" }} src={roomdetailimage} alt="network error" />
            </div>
            <div className="detail-content">
                <div className="sub-image">
                    <div className="sub-image-box">
                        <img src={roomdetailimage} style={{height:"150px", width: "200px"}} alt=" url error"/>
                    </div>
                    <div className="sub-image-box">
                    <img src={roomdetailimage} style={{height:"150px", width: "200px"}} alt=" url error"/>
                    </div>
                    <div className="sub-image-box">
                    <img src={roomdetailimage} style={{height:"150px", width: "200px"}} alt=" url error"/>
                    </div>
                </div>
                <div className="sub-box">
                    <div><i className="fas fa-money-bill-wave fa-fw"></i> Rs {price} per month</div>
                    <div><i className="fas fa-map-marker-alt fa-fw"></i>{location}</div>
                    <div><i className="fas fa-road fa-fw"></i> Nearby {nearBy}</div>
                </div>
            </div>
        </div>
    );
}

