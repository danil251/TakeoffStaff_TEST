import './App.css';
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import Contacts from "./components/Contacts/Contacts";
import {useEffect} from "react";
import {fetchContacts, setAuth} from "./redux/contacts-reducer";


function App() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.Contacts.auth)

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(fetchContacts())
            dispatch(setAuth(true))
        } else {
            dispatch(setAuth(false))
        }
    })

    return (
        <div>
            <Header/>
            {auth ? <Contacts/> : <Login/>}
        </div>
    );
}

export default App;
