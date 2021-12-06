import React from 'react'
import { Link } from 'react-router-dom'





const Nav = () => {


    const NavStyle =  {
        color: 'white'
    };

  return(
    <nav>
        <h1>React Showcase</h1>
        <ul className="nav-links">

           <Link to="/"> <li>Home</li> </Link>
           <Link to="/page2"> <li>Setup</li> </Link>
           <Link to="/page3"> <li>Tutorial</li> </Link>
           <Link to="/page4"> <li>Demo</li> </Link>
           <Link to="/page5"> <li>Conclusion</li> </Link>
           <Link to="/page6"> <li>Credits </li> </Link>
        </ul>
    </nav>
  )
}


export default Nav