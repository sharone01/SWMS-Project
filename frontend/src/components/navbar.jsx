import { Link } from 'react-router-dom'
import "./navbar.css" 
//  import logo from "../assets/logo.svg"
import {  useState  } from 'react'


const Navbar = () =>{   

    const [open, setOpen] = useState (false)
    return(
        
        <nav>
            <div className='nav-container'>
             {/* <img src={logo} alt = "Logo"/>  */}
            <ul className='nav-links'>
              
               
                
                <li><Link to ="/home">  Home</Link> </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
               <li><Link to="/dashboard">Dashboard</Link></li>
                <li> <Link to="/report">Report</Link> </li>

                 <li><Link to="/contact">Contact</Link></li> 
                 
            </ul>
            </div>
        </nav>

    )
}

export default Navbar