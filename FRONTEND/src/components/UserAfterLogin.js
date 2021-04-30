import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Search from './userSearch.js';

function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/login" />)
  }
  else {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div>
        <NavigationBar />
        <br />
        <h3>WELCOME {name}</h3>
        <Search/>
      </div>
    )
  }
}

export default UserAfterLogin
