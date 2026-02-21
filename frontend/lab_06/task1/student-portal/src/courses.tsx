interface Course{
    id: number,
    title: string
}

const courses: Course[] = [
    {id: 1, title: "web development"},
    {id: 2, title: "database system"},
    {id: 3, title: "operating systems"},
    {id: 4, title: "software engineering"}
]
function Courses(){
    return(
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses