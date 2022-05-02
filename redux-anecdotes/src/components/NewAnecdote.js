import { useDispatch } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer.js'
import anecdoteService from '../services/anecdoteService.js'
const NewAnecdote = (props) => {
    const dispatch = useDispatch()
    const addAnecdote = async(event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        //const NewAnec = await anecdoteService.createNewAnecdote(content)
        dispatch(createAnecdote(content))
    }
    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}
export default NewAnecdote
