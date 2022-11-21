import { Link } from 'react-router-dom';
import './Login.scss';
import Input from '../Components/Input'
function Login(props) {

    return (
        <section className="login" onSubmit={(e)=>e.nativeEvent.preventDefault}>
            <h1 className='registerTitle'>Сайт за контрагенти</h1>
            <div className="loginWrapper">

                <div className="login-header">
                    <h1>Вход</h1>
                </div>
                <form className="login-form">
                    <div className="l-inputContainer">
                        <Input name='username' placeholder="Потребителско име"></Input>
                        <Input type='password' placeholder="Парола"></Input>
                    </div>
                    <Link > Забравена парола</Link>
                    <div className="l-submit">
                            <input type="checkbox" />
                            <button>Влез</button>
                    </div>
                    <div className="redirect-r">
                        <p>Нямате създаден профил? - <Link to='/register'>Регистрирай се</Link></p>
                    </div>
                </form>
            </div>
        </section>

    )
}


export default Login;