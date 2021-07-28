import React, {useState} from 'react';
import s from './ContactItem.module.css'
import {pencil, trashCan, acceptSVG, close} from '../../../assets/svg'
import {deleteContact} from "../../../redux/contacts-reducer";
import {useDispatch} from "react-redux";
import ChangeWindow from "../ChangeWindow/ChangeWindow";

const ContactItem = ({name, lastName, phone, id}) => {
    const dispatch = useDispatch()
    const [windowIsOpen, setWindowIsOpen] = useState(false)
    const [accept, setAccept] = useState(false)

    const acceptHandler = () => {
        setAccept(true)
    }
    const deleteContactId = () => {
        dispatch(deleteContact(id))
    }
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td>
                    {accept ? <div className={s.accept}>
                        <div onClick={deleteContactId} className={s.svg}>{acceptSVG}</div>
                        <div className={s.svg} onClick={() => {
                            setAccept(false)
                        }}>{close}</div>
                    </div> : <div className={s.event}>
                        <div className={s.icon} onClick={() => {
                            setWindowIsOpen(!windowIsOpen)
                        }}>{pencil}</div>
                        <div className={s.icon} onClick={acceptHandler}>{trashCan}</div>
                    </div>}

                    {windowIsOpen ? <ChangeWindow id={id} name={name} phone={phone} lastName={lastName}
                                                  windowIsOpen={setWindowIsOpen}/> : null}
                </td>

            </tr>
        </>
    );
};

export default ContactItem;