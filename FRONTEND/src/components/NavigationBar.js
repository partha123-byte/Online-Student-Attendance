import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  //console.log(authuser)
  if (authuser === 'ADMIN') {
    return (

      <nav>
        <b className="nav">
              <Link className="navi"  to="/adminafterlogin">Admin Home </Link>
              <Link className="navi" to="/reg">Register Student</Link> 
              <Link className="navi" to="/displayall">Show All </Link>
              <Link className="navi" to="/search">Search Student</Link> 
              <Link className="navi" to="/delete">Delete Student </Link>
              <Link className="navi" to="/logout">Logout </Link>
              <Link className="navi" to="#">Update</Link> 
        </b>
      </nav>
    )

  }
  else if (authuser === 'USER') {
    return (
      <nav>
        <b className="nav">
            <Link  className="navii" to="/userafterlogin">User Home </Link>
            <Link className="navii" to="#">Profile </Link>
            <Link className="navii" to="/logout">Logout </Link>
        </b>
      </nav>
    )

  }
  else {
    return (
      <nav>
        <b className="nav">
          <Link className="navii" to="/">Home </Link> 
              <Link className="navii" to="/login">Login </Link> 
              <Link className="navii" to="/about">About Us </Link> 
              <Link className="navii" to="/contact">Contact Us </Link> 
              <Link className="navii" to="/adminlogin">Admin Login</Link>
        </b>
        
      </nav>
     
      
    )
  }
}

export default NavigationBar
