import { useEffect, useState } from "react";
import Input from "./Input";
import './PasswordSet.scss'


function PasswordSet(props){

    const passwordPattern = {
        capitalLetter:/[A-Z]+/g,
        smallLetter:/[a-z]+/g,
        number:/[0-9]+/g,
        special:/[!@#$%^&*]+/g
    };

    const [patternCheck,setPatternCheck] = useState({
        capitalLetter:null,
        smallLetter:null,
        number:null,
        special:null,
        strong:[]
    })

    useEffect(()=>{
        let result = {};
        for (const [key, value] of Object.entries(passwordPattern)) {   
            result[key] = props.password.match(value)
        }
        result.strong = Object.values(result).filter(e=> e !==null);
        setPatternCheck(result);
        props.onChange({target:{name:'validPassword',value:result.strong.length===4}})
        
    },[props.password])


    function onChange(e) {
        props.onChange(e)
    }

    return(
        <div className="profile-data-wrapper">
        <div className="register-form-profile-data-inputs fb48">
            <Input name='username' placeholder='Потребителско име' pattern={/^.+$/gm} errorMessage='Моля, попълнете.' onChange={onChange} />
            <div className="password-container">
                <Input name='password' placeholder='Парола' type='password' pattern={props.repassword !== '' ? props.repassword : props.password ? props.password : true}  errorMessage='Моля, попълнете.' onChange={onChange} />
                <div className="ps-validation-marks">
                    <div className={`ps-validation-mark1 ${patternCheck.strong.length >=1 ? 'markActive' : '' }`}></div>
                    <div className={`ps-validation-mark1 ${patternCheck.strong.length >=1 ? 'markActive' : '' }`}></div>
                    <div className={`ps-validation-mark2 ${patternCheck.strong.length >=2 ? 'markActive' : '' }`}></div>
                    <div className={`ps-validation-mark2 ${patternCheck.strong.length >=2 ? 'markActive' : '' }`}></div>
                    <div className={`ps-validation-mark3 ${patternCheck.strong.length >=4 ? 'markActive' : '' }`}></div>
                    <div className={`ps-validation-mark3 ${patternCheck.strong.length >=4 ? 'markActive' : '' }`}></div>
                </div>
            </div>
            <Input name='repassword' placeholder='Повтори паролата' type='password' pattern={props.password !== '' ? props.password : null} errorMessage='Моля, попълнете.' onChange={onChange} />
        </div>

        <div className="register-form-profile-data-validation">
            <h5 className="h5-profile-validation">Паролата трябвва да съдържа:</h5>
            <p className={`p-profile-validation ${patternCheck.smallLetter ? 'valid' : ''}`}>Малки букви</p>
            <p className={`p-profile-validation ${patternCheck.capitalLetter ? 'valid' : ''}`}>Големи букви</p>
            <p className={`p-profile-validation ${patternCheck.number ? 'valid' : ''}`}>Цифра</p>
            <p className={`p-profile-validation ${patternCheck.special ? 'valid' : ''}`}>Специален символ</p>
        </div>
    </div>
    );

}

export default PasswordSet;