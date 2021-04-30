import React from 'react'
import { Redirect } from 'react-router';
import NavigationBar from './NavigationBar';

function Home() {
  
  return (
  
    <div>
      <NavigationBar />
      <br />
       <div className="homeBack"><h1 className="home"><p>WELCOME TO</p>
      <p>ASANSOL ENGINEERING COLLEGE</p></h1> </div>
    </div>
  )
}

export default Home
