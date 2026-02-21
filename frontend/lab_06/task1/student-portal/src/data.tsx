export interface Course{
    id: number;
    title: string;
    instructor: string;
    description: string;
}
export const courses: Course[] = [
    {
        id: 1,
        title: "web dev",
        instructor: "valeria",
        description: "frontend and backend"
    },{
        id: 2,
        title: "web dev",
        instructor: "valeria",
        description: "frontend and backend"
    },{
        id: 3,
        title: "web dev",
        instructor: "valeria",
        description: "frontend and backend"
    },{
        id: 4,
        title: "web dev",
        instructor: "valeria",
        description: "frontend and backend"
    },
]

export function getCourseById(id: number): Course | undefined{
    return courses.find(course => course.id === id)
}