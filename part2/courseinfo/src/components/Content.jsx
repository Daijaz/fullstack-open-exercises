const Content = ({course}) => {
    return (
      <main>
        { course.parts.map(part => 
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          )
        }
      </main>
    )
}

export default Content