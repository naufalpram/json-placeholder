import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const PhotoCard = ({ photoData }) => {
  return (
    <div className='col-sm-4 mt-3'>
        <Card>
            <CardImg alt="Card image cap" src={photoData.thumbnailUrl} top width="100%" />
            <CardBody>
                <CardTitle tag="h5">
                    {photoData.title}
                </CardTitle>
            </CardBody>
        </Card>
    </div>
  )
}

export default PhotoCard