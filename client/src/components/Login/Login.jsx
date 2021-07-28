import React, {useState} from 'react';
import s from './Login.module.css'
import {setLogin, setStatus} from "../../redux/contacts-reducer";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const status = useSelector(state => state.Contacts.status)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("bruno@email.com")
    const [password, setPassword] = useState('bruno')
    const [error, setError] = useState('')

    const login = () => {
        setError('')
        dispatch(setStatus(''))
        if (email.length && password.length) {
            dispatch(setLogin(email, password))
        } else if (!email.length && !password.length) {
            setError('password и email')
        } else if (!email.length || !password.length) {
            setError(email.length ? 'password' : 'email')
        }
    }

    return (
        <div className={s.wrap}>
            <input className={s.input} type="text" onChange={(e) => {
                setEmail(e.currentTarget.value)
            }} value={email}/>
            <input className={s.input} type="password" onChange={(e) => {
                setPassword(e.currentTarget.value)
            }} value={password}/>
            <button className={s.btn} onClick={login}>Войти</button>
            {status === '' ? null : <div>{status}</div>}
            {error === '' ? null : <div>Вы не ввели {error}</div>}
        </div>
    );
};

export default Login;