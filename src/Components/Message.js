const Message = (props) => {
    return (
        <div>
            { props.message &&
                <div className="alert-message">
                    <p>{props.message}</p>
                </div>
            }
        </div>
    );
}
export default Message;