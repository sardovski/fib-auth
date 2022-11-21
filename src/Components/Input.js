import { useState } from "react";
import "./Input.scss"

function Input(props) {

    const [error, setError] = useState(false);
    const [focus, setFocus] = useState(false);

    function onBlur(e) {
        setFocus(false);

            let validationResult;

            if(props.pattern instanceof RegExp){

                validationResult = props.pattern.test(e.target.value.trim())
                
            }else if(props.pattern){
                
                validationResult = e.target.value.trim() === props.pattern;
            }


            if (validationResult === false) {
                setError(true);
            } else {
                setError(false);
            }
        // }
    }

    function onFocus() {
        setFocus(true);
    }

    return (
        <div className={`input-container ` + (props.className || '')}>
            <input type={props.type} className={(error === true && focus === false) ? 'error-border' : null} name={props.name} placeholder={props.placeholder} onChange={props.onChange} onBlur={onBlur} onFocus={onFocus} />
            {(error === true && focus === false) ? <span className="error">{props.errorMessage}</span> : null}
        </div>
    )

}

export default Input;