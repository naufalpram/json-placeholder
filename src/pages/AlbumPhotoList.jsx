import React, {useState, useEffect} from 'react'
import PhotoCard from '../components/cards/PhotoCard'
import UserInfoAll from '../components/UserInfoAll'
import { useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import axios from 'axios'

const AlbumPhotoList = () => {
  const { userId, albumId } = useParams();
  const [user, setUser] = useState({});
  const [photos, setPhotos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsFetching(true);
        try {
            const requestUser = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const requestPhotos = axios.get(`https://jsonplaceholder.typicode.com/photos`, { params: {albumId: albumId} });
            const [responseUser, responsePhotos] = await axios.all([requestUser, requestPhotos]);
            setUser(responseUser.data);
            setPhotos(responsePhotos.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        } finally {
            setIsFetching(false);
        }
    }
    fetchData();
  }, [])
  return (
    <>
    <UserInfoAll isFetching={isFetching} userData={user} />
    <div className='mb-5'>
        <div className='text-center mb-5'>
            <h5>Photo List</h5>
        </div>
        <div className='row'>
            {isFetching ? <Spinner /> : (
                photos.map(photo => <PhotoCard key={photo.id} photoData={photo} />)
            )}
        </div>
    </div>
    </>
  )
}

export default AlbumPhotoList