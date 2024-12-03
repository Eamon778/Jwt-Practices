import React from "react"
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from "./protectedRoute"
import LoginPage from "./pages/auth/loginPage"
import SignUpPage from "./pages/auth/signupPage"
import HomePage from './pages/home'

function App() {

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<SignUpPage/>} />
      <Route path="/" element={<HomePage />} />

      {/* Private Routes */}
      
    </Routes>
  )
}

export default App
