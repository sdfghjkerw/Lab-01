import {lazy, Suspense} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'

const Dashboard = lazy(() => import("./pages/dashboard"))
const Settings = lazy(() => import("./pages/settings"))
const Profile = lazy(() => import("./pages/profile"))

function Loading(){
  return <div className="spinner"></div>
}
function App() {
  return (
    <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/settings" element={<Settings />}/>
            <Route path="/profile" element={<Profile />}/>
          </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default App
