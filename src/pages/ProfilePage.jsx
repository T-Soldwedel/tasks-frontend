import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProfilePage = () => {

const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/users/65b909fedb803202ac88c3d2"
      );
      setUsers(response.data);
      console.log(response.data)

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

   getUsers();
}, []);

  return (
    <div>
        <h2>User Details</h2>
            <ul>
           <li>Name: {users.fName} {users.lName}</li> 
           <li>Email: {users.email}</li> 
           <li>Password: {users.password}</li> 
           {/* -- To Do: Map through the dailyThoughts -- */}
           {/* <li>DailyThoughts Title: {users.dailyThoughts[0].title}</li>  */}
            </ul>

           
      {/* <ul>
        {users.map(user => (
          <li key={user.id}>
            {`${user.fName} ${user.lName} - ${user.email || 'No Email'} - ${user.dailyThoughts[0].title}`}
          </li>
        ))}
      </ul> */}
    </div>
    
  )
}

export default ProfilePage