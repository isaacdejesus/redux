import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdoteService.js'
//before json
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

//const initialState = anecdotesAtStart.map(asObject)
const initialState= []
const anecdoteSlice = createSlice({
    name: 'anecdote',
    initialState,
    reducers:{
        /*createAnecdote(state, action) {
            const content = action.payload
            state.push({
                content,
                id: getId(),
                votes: 0
            })
        },*/
        //createAnecdote(state, action){
         //   state.push(action.payload)
        //},
        changeVotes(state, action) {
            const id = action.payload
            const anecdoteToChange = state.find(n => n.id === id)
            const changedAnec = {
                ...anecdoteToChange, votes: anecdoteToChange.votes + 1
            }
            return state.map(anec => anec.id !== id ? anec : changedAnec)
        },
        appendAnecdote(state, action){
            state.push(action.payload)
        },
        setAnecdotes(state, action){
            return action.payload
        },
        updateVoteState(state, action){

            return state.map(anec => anec.id !== action.payload.id ? anec : action.payload ) 
        }
    },
})
export const { changeVotes, appendAnecdote, setAnecdotes, updateVoteState} = anecdoteSlice.actions
export const updateVotes = (anecdote ) => {
    return async dispatch => {
        const anectodeToUpdate = {
           ...anecdote, votes: anecdote.votes + 1
        }    
        const updatedAnecdote = await anecdoteService.update(anecdote.id, anectodeToUpdate)
        dispatch(updateVoteState(updatedAnecdote))
    }
}
export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}
export const createAnecdote = content => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNewAnecdote(content)
        dispatch(appendAnecdote(newAnecdote))
    }
}
export default anecdoteSlice.reducer
//old code without slice
/*
const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
    switch (action.type){
        case 'VOTE': {
            const id = action.data.id
            const anecdoteToChange = state.find(n => n.id === id)
            const changedAnec = {
                ...anecdoteToChange, votes: anecdoteToChange.votes = anecdoteToChange.votes + 1
            }
            return state.map(anec => anec.id !== id ? anec : changedAnec)
        }
        case 'NEW_ANECDOTE': {
            return [...state, action.data]
        }
        default:
            return state

    }
  return state
}

 export const changeVotes = (id) => {
    return {
        type: 'VOTE',
        data: { id }
    }
}
export const createAnecdote = (content) => {
    return {
        type: 'NEW_ANECDOTE',
        data: {
            content,
            id: getId(),
            votes: 0
        }
    }
}


export default reducer
*/
