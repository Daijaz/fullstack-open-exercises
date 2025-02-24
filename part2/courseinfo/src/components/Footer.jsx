const Footer = ({course}) => {
    console.log(course)
    return (
      <footer>
        <h3>
          total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
        </h3>
      </footer>
    )
}

export default Footer;