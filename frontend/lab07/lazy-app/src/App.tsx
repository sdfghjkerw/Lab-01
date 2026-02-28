import {lazy, Suspense} from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import ErrorBoundary from "./ErrorBoundary"

const Dashboard = lazy(() => import("./pages/dashboard"))
const Settings = lazy(() => import("./pages/settings"))
const Profile = lazy(() => import("./pages/profile"))

function Loading(){
  return <div className="spinner"></div>
}

function ErrorFallBacck(){
  return(
    <div className="error">
      <h2>something went wrong</h2>
      <button onClick={() => window.location.reload()}>reload page</button>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallBacck />}>
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
    </ErrorBoundary>

  )
}

export default App
