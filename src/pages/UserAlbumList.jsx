import React, {useState, useEffect} from 'react'
import UserInfoAll from '../components/UserInfoAll'
import AlbumCard from '../components/cards/AlbumCard'
import { Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserAlbumList = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [albums, setAlbums] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsFetching(true);
        try {
            const requestUser = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const requestAlbums = axios.get(`https://jsonplaceholder.typicode.com/albums`, { params: {userId: userId} });
            const [responseUser, responseAlbums] = await axios.all([requestUser, requestAlbums]);
            setUser(responseUser.data);
            setAlbums(responseAlbums.data);
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
                <h5>Album List</h5>
            </div>

            <div className='row'>
                {isFetching ? <Spinner /> : (
                    albums.map(album => <AlbumCard key={album.id} userId={userId} albumData={album} />)
                )} 
            </div>
        </div>
    </>
  )
}

export default UserAlbumList