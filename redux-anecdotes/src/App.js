import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeVotes}  from './reducers/anecdoteReducer.js'
import NewAnecdote from './components/NewAnecdote.js'
import AnecdoteList from './components/AnecdoteList.js'
import Notification from './components/Notification.js'
import anecdoteService from './services/anecdoteService'
import {setAnecdotes, initializeAnecdotes} from './reducers/anecdoteReducer.js'
const App = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(initializeAnecdotes())
    }, [dispatch])
  return (
    <div>
        <Notification /> 
        <AnecdoteList />
        <NewAnecdote />
    </div>
  )
}

export default App
