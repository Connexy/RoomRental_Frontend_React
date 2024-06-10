const TextInput = (props) => {
    return (
        <div className="input-box">
            <label>{props.title}</label>
            {props.errorMessage !== '' && <span className="label-danger">{props.errorMessage}</span>}
            <input
                type="text"
                name={props.name}
                value={props.value}
                onChange={props.handleInputChange}
                {...props}
            />

        </div>
    );
}
export default TextInput;