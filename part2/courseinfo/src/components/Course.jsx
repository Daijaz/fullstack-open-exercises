import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Course = ({course}) => {
    return (
        <>
            {
                course.map(course => 
                    <div key={course.id}>
                        <Header course={course}></Header>
                        <Content course={course}></Content>
                        <Footer course={course}></Footer>
                    </div>
                )
            }
        </>
    )
} 

export default Course;