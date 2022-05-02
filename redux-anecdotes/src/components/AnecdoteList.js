import { useDispatch, useSelector } from 'react-redux'
import { updateVotes, changeVotes } from '../reducers/anecdoteReducer.js'
import { setNotif, clearNotif} from '../reducers/notifReducer.js'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                <button onClick={handleClick}>vote</button><span> </span>
                {anecdote.votes}
            </div>
        </div>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    return (
        <div>
            {anecdotes.map(anecdote => 
                <Anecdote 
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={()=>{
                        dispatch(updateVotes(anecdote)); 
                        dispatch(setNotif(`Increasing vote for ${anecdote.content}`))
                        setTimeout(()=>{
                            dispatch(clearNotif())
                        }, 3000)
                    }}
                />
            )}
        </div>
    )
}
export default AnecdoteList
