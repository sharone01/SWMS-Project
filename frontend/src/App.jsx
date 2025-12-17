import { Route, Routes } from 'react-router'
import Home from './components/home'
import Login from './components/login'
import About from './components/about'
import Dashboard from './components/dashboard'
import Contact from './components/contact'
import './App.css'
import SignUp from './components/signup'
import Report from './components/Report'
import Navbar from './components/navbar'
import Landing from './components/landingPage'
import ProtectedRoute from './components/protectedRoute'

function App() {
  
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path ="/home" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path ="/login" element = {<Login/>}/>
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path ="/Report" element = {<Report/>}/>
          <Route path="/signup" element = {<SignUp/>}/>
          <Route path ="/contact" element = {<Contact/>}/>
          <Route path='/' element = {<Landing/>}/>

        <Route
               path="/dashboard"
              element={
                        <ProtectedRoute role="admin">
                                   <Dashboard />
                        </ProtectedRoute>
                      }
        />

          

        </Routes>
       
    </>
  )
}

export default App
