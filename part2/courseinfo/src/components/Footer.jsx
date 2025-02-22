const Footer = ({course}) => {
    return (
      <footer>
        <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
      </footer>
    )
}

export default Footer;