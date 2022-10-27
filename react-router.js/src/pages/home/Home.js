import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate();
  const gotoAboutPage = () =>{
     Navigate('Profile')
  };
  return (
    <div>Home
     
      <Link to={"Contact"}>go to Contact</Link>
      <button onClick={() => gotoAboutPage()}>go to about</button>
    </div>
    
  )
}

export default Home