import {applyMiddleware, combineReducers, createStore} from 'redux'
import {contactsReducer} from "./contacts-reducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    Contacts: contactsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


