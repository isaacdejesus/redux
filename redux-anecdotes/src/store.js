import {configureStore} from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer.js'
import notifsReducer from './reducers/notifReducer.js'
const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notifs: notifsReducer
    }
})

export default store
