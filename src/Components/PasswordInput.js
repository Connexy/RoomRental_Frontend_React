const PasswordInput = (props) =>{
    return(
        <div className="input-box">
            <label>{props.title}</label>
            <input 
            type="password"
            name={props.name}
            value={props.value}
            onChange={props.handleInputChange}
            {...props}
            />

        </div>
    );

}
export default PasswordInput;