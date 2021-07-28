import React, {useState} from 'react';
import s from './ChangeWindow.module.css'
import {putContact} from "../../../redux/contacts-reducer";
import {useDispatch} from "react-redux";

const ChangeWindow = ({id, name, lastName, phone, windowIsOpen}) => {
    const dispatch = useDispatch()

    const [nameInput, setNameInput] = useState(name)
    const [lastNameInput, setLastNameInput] = useState(lastName)
    const [phoneInput, setPhoneInput] = useState(phone)

    const addContactHandler = () => {
        let newName = nameInput[0].toUpperCase() + nameInput.slice(1)
        let newLastName = lastNameInput[0].toUpperCase() + lastNameInput.slice(1)
        dispatch(putContact(id, newName, newLastName, phoneInput))
        windowIsOpen(false)

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
                    <input className={s.input} type="text" value={nameInput} onChange={(e) => {
                        setNameInput(e.currentTarget.value)
                    }}/>
                    <div>Фамилия</div>
                    <input className={s.input} type="text" value={lastNameInput} onChange={(e) => {
                        setLastNameInput(e.currentTarget.value)
                    }}/>
                    <div>Номер телефона</div>
                    <input className={s.input} type="text" value={phoneInput} onChange={(e) => {
                        setPhoneInput(e.currentTarget.value)
                    }}/>
                    <button className={s.add} onClick={addContactHandler}>Изменить</button>
                </div>
            </div>
        </div>
    );
};

export default ChangeWindow;