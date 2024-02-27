import React, {useState, useEffect} from 'react';
import UserInfoAll from '../components/UserInfoAll';
import PostCard from '../components/cards/PostCard';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import axios from 'axios';

const UserPostList = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsFetching(true);
        try {
            const requestUser = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const requestPosts = axios.get(`https://jsonplaceholder.typicode.com/posts`, { params: {userId: userId} });
            const [responseUser, responsePosts] = await axios.all([requestUser, requestPosts]);
            setUser(responseUser.data);
            setPosts(responsePosts.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        } finally {
            setIsFetching(false)
        }
    }
    fetchData();
  }, [])
  
  return (
    <>
    <UserInfoAll isFetching={isFetching} userData={user} />
    <div className='mb-5'>
        <div className='text-center mb-5'>
            <h5>Post List</h5>
        </div>
        {isFetching ? <Spinner /> : (
            posts.map(post => <PostCard key={post.id} postData={post} />)
        )}  
    </div>
    </>
  )
}

export default UserPostList;