import React from 'react'
import { Link,useParams } from 'react-router-dom'

const Profile = () => {
  const params = useParams();
  console.log("params",params);
  return (
    <div>Profile
       <Link to={"/Contact"}>go to Profile</Link>
    </div>
  )
}

export default Profile