import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText, Spinner, Button } from 'reactstrap';

const PostDetail = ({ isFetching, postData }) => {
  const navigate = useNavigate();

  return (
    <div className='mb-5'>
        <Button color="secondary" onClick={() => navigate('..')}>Back</Button>
        <div className='text-center'>
            <h5>Post Detail</h5>
        </div>
        {isFetching ? <Spinner /> : (
            <Card className='mt-3'>
                <CardHeader>{postData.title}</CardHeader>
                <CardBody>
                    <CardText>{postData.body}</CardText>
                </CardBody>
            </Card>
        )}
    </div>
  )
}

export default PostDetail