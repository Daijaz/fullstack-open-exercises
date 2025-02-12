const Header = (props) => {
  return (
    <header>
      <h1>{props.course.name}</h1>
    </header>
  )
}  

const Content = (props) => {
  return (
    <main>
      <p>{props.course[0].name} {props.course[0].exercises}</p>
      <p>{props.course[1].name} {props.course[1].exercises}</p>
      <p>{props.course[2].name} {props.course[2].exercises}</p>
    </main>
  )
}  

const Footer = (props) => {
  return (
    <footer>
      <p>Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises}</p>
    </footer>
  )
} 

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course.parts} />
      <Footer course={course.parts} />
    </div>
  )
}

export default App;