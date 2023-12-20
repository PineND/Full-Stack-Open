import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StaticLine = ({ type,number }) => {
  return (
    <div>
      {type} {number}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <p> No feedback given </p>
    )
  }
  else {
    const average = (good * 1 + neutral * 0 + bad * -1) / all
    const percent = (good / all * 100) + ' %'
    return (
      <div>
         <StaticLine type='good' number={good} />
         <StaticLine type='neutral' number={neutral} />
         <StaticLine type='bad' number={bad} />
         <StaticLine type='all' number={all} />
         <StaticLine type='average' number={average} />
         <StaticLine type='percent' number={percent} />
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    const updatedGood = good + 1
    console.log('good is updated to', updatedGood)
    setGood(updatedGood)
  }

  const addNeutral = () => {
    const updatedNeutral = neutral + 1
    console.log('neutral is updated to', updatedNeutral)
    setNeutral(updatedNeutral)
  }

  const addBad = () => {
    const updatedBad = bad + 1
    console.log('bad is updated to', updatedBad)
    setBad(updatedBad)
  }

  return (
    <div>
      <h1> give feedback </h1>
      <Button onClick={addGood} text='good' />
      <Button onClick={addNeutral} text='neutral' />
      <Button onClick={addBad} text='bad' />

      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
