import { Link, useSearchParams } from "react-router-dom"

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
    const [SearchParams, setSearchParams] = useSearchParams()
    const sortOrder = SearchParams.get("sort") || "asc"
    const sortedCourses = [...courses].sort((a, b) => 
        sortOrder === "desc"
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title)
    )

    const toggleSort = () => {
        setSearchParams({
            sort: sortOrder === "asc" ? "desc" : "asc",
        })
    }

    return(
        <div>
            <h1>Courses</h1>
            <button onClick={toggleSort}>sort: {sortOrder.toUpperCase()}</button>
            <ul>
                {sortedCourses.map((course) => (
                    <li key={course.id}>
                        <Link to={` /courses/${course.id}`}>
                            {course.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Courses