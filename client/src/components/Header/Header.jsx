import React from 'react';
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/contacts-reducer";



const Header = () => {
    const auth = useSelector(state => state.Contacts.auth)
    const dispatch = useDispatch()
    const logout = () => {
        localStorage.clear()
        dispatch(setAuth(false))
    }
    return (
        <div className={s.header}>
            {auth? <button onClick={logout} className={s.btn}> Выйти </button> : null}
        </div>
    );
};

export default Header;