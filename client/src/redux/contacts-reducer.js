import {API} from "../api/api";

const initialState = {
    contacts: [],
    status: '',
    auth: false
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'SET-AUTH': {
            return {...state, auth: action.auth}
        }
        case 'SET-CONTACTS': {
            return {...state, contacts: action.contacts}
        }
        default:
            return {...state}
    }
}


export const setStatus = (status) => ({type: 'SET-STATUS', status})
export const setContacts = (contacts) => ({type: 'SET-CONTACTS', contacts})
export const setAuth = (auth) => ({type: 'SET-AUTH', auth})

export const setLogin = (email, password) => async (dispatch) => {
    await API.login(email, password).then((res) => {
        localStorage.setItem("token", res.data.access_token)
        dispatch(setAuth(true))
    }).catch(() => {
        dispatch(setStatus('Не верный email или password'))
    })
    await dispatch(fetchContacts())
}
export const fetchContacts = () => (dispatch) => {
  return API.getContacts().then((res) => {
        dispatch(setContacts(res.data))
    })
}
export const addContact = (name, lastName, phone) => async (dispatch) => {
    await API.addContact(name, lastName, phone).then(() => {
    })
    await dispatch(fetchContacts())
}
export const deleteContact = (id) => async (dispatch) => {
    await API.deleteContact(id).then(() => {
    })
    await dispatch(fetchContacts())
}
export const putContact = (id, name, lastName, phone) => async (dispatch) => {
    await API.putContact(id, name, lastName, phone).then(() => {
    })
    await dispatch(fetchContacts())
}