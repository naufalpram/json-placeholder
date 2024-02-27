import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';

const CommentCard = ({ commentData }) => {
  return (
    <Card className='mt-3'>
        <CardBody>
            <CardTitle tag="h5">{commentData.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
                {commentData.email}
            </CardSubtitle>
            <CardText>
                {commentData.body}
            </CardText>
        </CardBody>
    </Card>
  )
}

export default CommentCard