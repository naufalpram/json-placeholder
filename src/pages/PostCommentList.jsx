import React, {useState, useEffect} from 'react'
import CommentCard from '../components/cards/CommentCard'
import PostDetail from '../components/PostDetail';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import axios from 'axios';

const PostCommentList = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsFetching(true);
        try {
            const requestPost = axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const requestComments = axios.get(`https://jsonplaceholder.typicode.com/comments`, { params: {postId: postId} });
            const [responsePost, responseComments] = await axios.all([requestPost, requestComments]);
            setPost(responsePost.data);
            setComments(responseComments.data);
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
    <PostDetail isFetching={isFetching} postData={post} />
    <div className='mb-5'>
        <div className='text-center mb-5'>
            <h5>Comment List</h5>
        </div>
        {isFetching ? <Spinner /> : (
            comments.map(comment => <CommentCard key={comment.id} commentData={comment} />)
        )}
    </div>
    </>
  )
}

export default PostCommentList;