const TextInput = (props) => {
    return (
        <div className="input-box">
            <label>{props.title}</label>
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