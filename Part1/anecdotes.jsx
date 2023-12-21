import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)

  const count = anecdotes.length - 1
  
  const GetRanHandler = () => NewAnecdotes({count})

  const NewAnecdotes = (props) => {
    console.log(props)
    const min = Math.ceil(0)
    const max = Math.floor(props.count)
    const result = Math.floor(Math.random() * (max - min + 1) + min)
    console.log('random result is', result)
    setSelected(result)
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>
        <button onClick={GetRanHandler}> next anecdote </button>
      </p>
    </div>
  )
}

export default App
