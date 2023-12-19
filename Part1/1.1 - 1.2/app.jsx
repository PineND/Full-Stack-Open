
const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part exercises={props.exercises[0]} />
      <Part exercises={props.exercises[1]} />
      <Part exercises={props.exercises[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.exercises.name} {props.exercises.length}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>
      Number of exercises {props.exercises[0].length + props.exercises[1].length + props.exercises[2].length}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    { name: 'Fundamentals of React', length: 10 },
    { name: 'Using props to pass data', length: 7 },
    { name: 'State of a component', length: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
