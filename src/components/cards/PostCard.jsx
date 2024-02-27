import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PostCard = ({ postData }) => {
  return (
    <Card className='mt-3'>
        <CardBody>
            <CardTitle tag="h5">{postData.title}</CardTitle>
            <CardText>
                {postData.body}
            </CardText>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
                <Link to={`/posts/${postData.userId}/comments/${postData.id}`}>
                    View Comments
                </Link>
            </div>
        </CardBody>
    </Card>
  )
}

export default PostCard