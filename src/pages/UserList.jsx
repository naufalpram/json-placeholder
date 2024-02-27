import React, { useState, useEffect } from 'react'
import UserCard from '../components/cards/UserCard'
import axios from 'axios';
import { Spinner } from 'reactstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        } finally {
            setIsLoading(false)
        }
    }
    fetchUsers();
  }, []);

  return isLoading ? <Spinner /> : (
        users.map(user => (<UserCard key={user.id} userData={user} />))
    )
}

export default UserList