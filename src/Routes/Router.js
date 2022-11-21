import {Routes,Route,Navigate} from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export default function Router(props) {

    return (
        <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    );

}