import React, {useState} from 'react';
import s from './CreationWindow.module.css'
import {addContact} from "../../../redux/contacts-reducer";
import {useDispatch} from "react-redux";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const CreationWindow = ({windowIsOpen}) => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('+7')
    const [error, setError] = useState('')

    const addContactHandler = () => {
        if (name.length && lastName.length && phone) {
            let newName = name[0].toUpperCase() + name.slice(1)
            let newLastName = lastName[0].toUpperCase() + lastName.slice(1)
            dispatch(addContact(newName, newLastName, phone))
            windowIsOpen(false)
        } else {
            setError('Все поля формы должны быть заполнены')
        }
    }
    const close = () => {
        windowIsOpen(false)
    }
    return (
        <div className={s.bg}>
            <div className={s.modal}>
                <div className={s.wrap}>
                    <div className={s.close} onClick={close}>X</div>
                    <div>Имя</div>
                    <input className={s.input} type="text" value={name} onChange={(e) => {
                        setName(e.currentTarget.value)
                    }}/>
                    <div>Фамилия</div>
                    <input className={s.input} type="text" value={lastName} onChange={(e) => {
                        setLastName(e.currentTarget.value)
                    }}/>
                    <div>Номер телефона</div>
                    <PhoneInput className={s.input} type="tel" value={phone} onChange={setPhone}/>
                    <button className={s.add} onClick={addContactHandler}>Добавить</button>
                    {error.length ? <div className={s.error}>{error}</div> : null}
                </div>
            </div>
        </div>
    );
};

export default CreationWindow;