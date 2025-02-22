import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Course = ({course}) => {
    return (
        <>
            <Header course={course}r></Header>
            <Content course={course}></Content>
            <Footer course={course}></Footer> 
        </>
    )
} 

export default Course;