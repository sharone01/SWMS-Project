import { Link } from "react-router"
import { useNavigate } from "react-router";

import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [form , setForm] = useState ({name:"", email:"", password:"",})
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post ("http://localhost:3000/API/AUTH/signup", form)
    localStorage.setItem ("token", res.data.token);
   navigate ('/home')
  } 
  
    return (
        <>
<form onSubmit={handleSubmit}  >

  <h1>Sign Up here!!</h1>
    <input type='text' placeholder=' Name'className='cols-200 p-3 rounded-3 form-control '
    onChange = { (e) => setForm({...form, name: e.target.value}) }
    /><br/>

  <input type='email' placeholder='Email Address' className='cols-200 p-3 rounded-3 mb-3 form-control'
  onChange = { (e) => setForm({...form, email: e.target.value}) }
  
  /><br/>

  <input type='password' placeholder='Password' className='cols-200 p-3 rounded-3 form-control '
  onChange = { (e) => setForm({...form, password: e.target.value}) }
  
  /><br/><br/> 
  

  <button className='cols-80 p-3 rounded-3  '>
     <Link to = "/home">SignUp</Link>
     </button>
  </form>
  
        </>
    )
}

export default SignUp 