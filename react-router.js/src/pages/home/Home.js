import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate();
  const gotoAboutPage = () =>{
     Navigate('Profile/4')
  };
  const gotoProductPage = () =>{
    Navigate({
      pathname:'Product',
      search:"?id=4&name=flipkart",
    }

    )
 };
  return (
    <div>Home
     
      <Link to={"Contact/5"}>go to Contact</Link>
      <Link to={"Product?id=4&name=flipkart"}>go to product</Link>
      <button onClick={() => gotoAboutPage()}>go to about</button>
      <button onClick={() => gotoProductPage()}>go to product</button>
    </div>
    
  )
}

export default Home