import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "./data";

function CourseDetail(){
    const {id} = useParams()

    const {course} = useLoaderData() as {
        course: Course
    }

    return(
        <div>
            <h1>{course.title}</h1>
            <p>Instructor: {course.instructor}</p>
            <p>{course.description}</p>
            <p>Route ID: {id}</p>
        </div>
    )
}

export default CourseDetail