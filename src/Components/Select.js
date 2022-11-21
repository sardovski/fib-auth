import { useState } from "react";
import "./Select.scss"

function Select(props) {

    const [error, setError] = useState(false);
    const [focus, setFocus] = useState(false);

    function onBlur(e) {
        setFocus(false);

        if (props.pattern) {

            let validationResult;
            if(props.pattern instanceof RegExp){

                validationResult = props.pattern.test(e.target.value.trim())
            }else{
                validationResult = props.pattern.toLowerCase() === e.target.value.trim().toLowerCase();
            }
            
            if (validationResult === false) {
                setError(false);
            } else {
                setError(true);
            }
        }
    }

    function onFocus(e) {
        console.log(e);
        setFocus(true);
    }

    return (
        <div className={"select-container " + (props.className || '')}>
            <select className={(error === true && focus === false) ? 'error-border' : null} name={props.name} defaultValue={props.placeholder} onChange={props.onChange} onBlur={onBlur} onFocus={onFocus}>
                <option value={props.placeholder} disabled>{props.placeholder}</option>
                {props.options.map(e => <option key={e} value={e} >{e}</option>)}
            </select>
            {(error === true && focus === false) ? <span className="error">{props.errorMessage}</span> : null}

        </div>
    )

}

export default Select;

