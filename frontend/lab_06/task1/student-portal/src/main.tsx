import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from "./Layout.tsx"
import Home from "./home.tsx"
import About from './About.tsx'
import NotFound from './notFound.tsx'
import Courses from './courses.tsx'
import { getCourseById } from "./data.tsx"
import CourseDetail from "./courseDetails.tsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: "courses", element: <Courses />},
      {path: "about", element: <About />},
      {path: "*", element: <NotFound />},
      {
        path: "courses/:id",
        element: <CourseDetail/>,
        errorElement: <p>course not found</p>,
        loader: async ({params}) => {
          const course = getCourseById(Number(params.id))
          if(!course){
            throw new Error("Course not found")
          }

          return {course}
        },
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
