import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import './Login.css'
import { CloseBtn } from '../../Icon';
import InputBar from '../../InputBar/InputBar';
import Button from '../../Button/Button';
import { login } from '../../../redux/requestApi'
import { useEffect } from 'react';

const LoginModal = (props) => {
    const {setLogModal, setRegisterModal} = props
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const AuthemModal = createContext()
    // const setLogModal = useContext(AuthemModal)
    
 

    const handleSubmitLog = async (e) => {
        e.preventDefault()
        const newUser  = {
            username: username,
            password: password
        }
        await login(newUser, dispatch, navigate)
        await setLogModal(false)

        
    }

    return ( 
        <div>
            <div className="Login_modal-overlay">

                <form className="Login_modal" onSubmit={handleSubmitLog}>
                    <header className="Login_modal-header">

                        <h3 className="Login_modal-title">Login</h3>
                        <CloseBtn 
                            classStyle={'Login_modal-close_btn'} 
                            onClick={() => setLogModal(false)}/>

                    </header>
                    <div className="Login_modal-body">
                        <InputBar 
                            placeholder='Username' 
                            onChange={(e) => setUserName(e.target.value)} 
                            width='100%'/>
                        <InputBar 
                            placeholder='Password' 
                            onChange={(e) => setPassword(e.target.value)} 
                            width='100%' 
                            type='password'/>
                    </div>

                    <div className="Login_modal-icon-box">
                        <Button width={'100%'} btnType={'primary'}>Login</Button>
                    </div>

                </form>
            </div>
            

               

           
        </div>
    );
}
 
export default LoginModal;