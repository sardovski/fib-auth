import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

import Input from "../Components/Input";
import Select from "../Components/Select";

import CITY_DATA from "../Mock/CITY_DATA";
import { registerReducer, INITIAL_STATE } from "./registerReducer"
import RadioBtn from "../Components/RadioBtn";
import PasswordSet from "../Components/PasswordSet";

function Register() {

    const [state, dispatch] = useReducer(registerReducer, INITIAL_STATE);

    function onChange(e) {

        dispatch({
            type: "CHANGE_INPUT",
            payload: { name: e.target.name, value: e.target.value }
        })
    }
    let validForm = !Object.values(state).some(e=>Boolean(e.value) === false) && state.password.value === state.repassword.value ;
console.log(validForm);
    return (
        <section className="register">
            <div className="register-header">
                <Link to='/login' className="register-header-btn">Назад</Link>
                <h1>Създаване на профил</h1>
            </div>
            <form className="register-form">

                <div className="register-form-personal-data">
                    <h3>Лични данни</h3>
                    <div className="input-container-personal-data">
                        <Input name='firstName' placeholder='Име' pattern={/^.+$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
                        <Input name='lastName' placeholder='Фамилия' pattern={/^.+$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
                        <Select className='fb48' name='city' placeholder='Град' pattern={'Град'} options={CITY_DATA} errorMessage='Моля, изберете град.' onChange={onChange} />
                        <Input name='pin' placeholder='ЕГН' pattern={/^[0-9]{10}$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
                        <Input className='fb100' name='address' placeholder='Адрес' pattern={/^.+$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
                        <Input name='email' placeholder='Email адрес' pattern={/^.+$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
                        <Input name='phone' placeholder='Телефон' pattern={/^.+$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
                    </div>
                </div>

                <div className="register-form-profile-data">
                    <h3>Профил</h3>
                    <PasswordSet onChange={onChange} password={state.password.value} repassword={state.repassword.value}/>
                    <div className="profile-data-options">

                        <div onChange={onChange} className="profile-data-options-mediator">
                            <p>Тип посредничество:</p>
                            <RadioBtn id='mediator1' value='mediator' label='Посредник' name="intermediation" />
                            <RadioBtn id='mediator2' value='legal entity' label='Сътрудник (ЮЛ)' name="intermediation" />
                            <RadioBtn id='mediator3' value='legal person' label='Сътрудник (ФЛ)' name="intermediation" />
                        </div>
                        <div onChange={onChange} className="profile-data-options-contract">
                            <p>Имате ли сключен договор с Банката?</p>
                            <RadioBtn id='contract1' value='yes' label='Имам' name="contract" />
                            <RadioBtn id='contract2' value='no' label='Нямам' name="contract" />
                        </div>
                    </div>
                </div>
                <button disabled={!validForm} className="register-btn">Регистрация</button>
            </form>
        </section>
    );
}

export default Register;
