
import { useState, react} from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtextedRoute"


function Logout () {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes >
        <Route 
          path ="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<RegisterAndLogout/>}/>
        <Route path = "/logout" element = {<Logout/>}/>
        <Route path = "*" element = {<NotFound />}/>

      </Routes>
    </BrowserRouter>

  )
}

export default App
