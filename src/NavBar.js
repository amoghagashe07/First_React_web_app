import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function NavBar() {
    return (
        <div>
            <nav>
                <div className='logo'><b>React Web App</b></div>
                <ul>
            
                    <li><Link to='/task'>Task Tracker</Link></li>
                    <li><Link to='/login'>Login/Register</Link></li>
                    <li><Link to='/addsub'>Plus Minus</Link></li>

                </ul>
            
            </nav>
        </div>
    )
}

export default NavBar
