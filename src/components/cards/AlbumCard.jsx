import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';

const AlbumCard = ({ albumData }) => {
  return (
    <div className='col-sm-4 mt-3'>
        <Card>
            <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
            <CardBody>
                <CardTitle tag="h5">
                    {albumData.title}
                </CardTitle>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                    <Link to={`/albums/${albumData.userId}/photos/${albumData.id}`}>
                        View Photos
                    </Link>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default AlbumCard