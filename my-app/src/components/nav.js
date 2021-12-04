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

           <Link to="/"> <li>Page 1</li> </Link>
           <Link to="/page2"> <li>Page 2</li> </Link>
           <Link to="/page3"> <li>Page 3</li> </Link>
           <Link to="/page4"> <li>Page 4</li> </Link>
           <Link to="/page5"> <li>Page 5</li> </Link>
           <Link to="/page6"> <li>Page 6</li> </Link>
        </ul>
    </nav>
  )
}


export default Nav