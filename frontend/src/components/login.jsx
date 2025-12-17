import { Link } from "react-router"
import { useState } from "react";
import { useNavigate } from "react-router"
// import axios from "axios"
import { loginUser } from '../api'


const Login = () => {

  const [form, setForm] = useState({email:"", password:""});
  const navigate = useNavigate ();

  
const handleLogin = async () => {
  e.preventDefault();
  console.log (form);
  
  const data = await loginUser(email, password);
  if
    (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);
      alert("Login successful");

      navigate('/home')

  }  else  {
    alert(data.error || "Login failed");
    
  }
};

  //  const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   const res = await axios.post ("http://localhost:3000/API/AUTH/login", form)
  //   localStorage.setItem ("token", res.data.token);
    
  //   navigate ("/home");
  // }
    return (
        <>
        <div id="login">
            <h2 className="text-center fw-bolder">User Login </h2>
            <h4>Login with your email and password</h4>

  <form onSubmit={handleLogin}>
                
  <input type='email' placeholder='Email Address' className='cols-200 p-3 rounded-3 form-control'
  onChange = { (e) => setForm({...form, email: e.target.value}) }
  /><br/>

  <input type='password' placeholder='Password' className='cols-200 p-3 rounded-3 form-control required'
  onChange = { (e) => setForm({...form, password: e.target.value}) }
  /><br/>

  <label className=''>Forgot Password?</label><br/><br/>
  
  

  <button className='cols-80 p-3 rounded-3 form-control '>
    
  <Link to= "/home">Login</Link>

  </button>
  
  </form><br/><br/>
  <p>don't have an account? 
    <span>
        <Link
         to="/signup">
            SignUp
        </Link>
    </span>
  </p>

        </div>
        </>
    )
}

export default Login