import React, {useState} from 'react';
import s from './Contacts.module.css'
import {useSelector} from "react-redux";
import ContactItem from "./ContactItem/ContactItem";
import CreationWindow from "./CreationWindow/CreationWindow";

const Contacts = () => {
    const contacts = useSelector(state => state.Contacts.contacts)
    const [windowIsOpen, setWindowIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('name')


    let contactsItem = search.length ? contacts.filter((f) => {
        if (select === 'name') {
            return f.name.toLowerCase().startsWith(search.toLowerCase())
        } else if (select === 'lastName') {
            return f.lastName.toLowerCase().startsWith(search.toLowerCase())
        } else if (select === 'phone') {
            return f.phone.toLowerCase().startsWith(search.toLowerCase())
        }
    }) : contacts
    const contact = contactsItem.map(c => <ContactItem name={c.name} lastName={c.lastName} phone={c.phone} key={c.id}
                                                       id={c.id}/>)

    return (
        <div>
            <div className={s.menu}>
                <div className={s.text}>Поиск по:</div>
                <select className={s.select} onChange={(e) => {
                    setSelect(e.currentTarget.value)
                }}>
                    <option value="Name">имени</option>
                    <option value="lastName">фамилии</option>
                    <option value="phone">номеру</option>
                </select>
                <input className={s.input} type="text" value={search} onChange={(e) => {
                    setSearch(e.currentTarget.value)
                }}/>
                <div className={s.addContact} onClick={() => {
                    setWindowIsOpen(!windowIsOpen)
                }}>Добавить контакт
                </div>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Номер телефона</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {contact}
                </tbody>
            </table>
            {windowIsOpen ? <CreationWindow windowIsOpen={setWindowIsOpen}/> : null}
        </div>
    );
};

export default Contacts;