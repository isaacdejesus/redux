import { createSlice } from '@reduxjs/toolkit'
const initialState = null
const notifSlice = createSlice({
    name: 'notif',
    initialState,
    reducers: {
        setNotif(state, action){
            const content = action.payload
            console.log(content)
            return state = content
        },
        clearNotif(state, action) {
            return state = null
        }
    }
})

export const {setNotif, clearNotif} = notifSlice.actions
export default notifSlice.reducer
