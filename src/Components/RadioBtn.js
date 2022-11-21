import "./RadioBtn.scss";

function RadioBtn(props) {

    return (
        <div className="radio-btn">

            <input id={props.id} type="radio" value={props.value} name={props.name} className={props.className} />
            <label htmlFor={props.id}>
                {props.label}
            </label>

        </div>
    )
}


export default RadioBtn;