import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';

const UserCard = ({ userData }) => {
  return (
    <Card className='mt-3'>
        <CardHeader>{userData.name}</CardHeader>
        <CardBody>
            <div className='row'>
                <div className="col-sm">
                    <label className="form-label">
                        <strong>Username</strong>
                    </label>
                    <div className="col-sm-12">{userData.username}</div>
                </div>
                <div className="col-sm">
                    <label className="form-label">
                        <strong>Email</strong>
                    </label>
                    <div className="col-sm-12">{userData.email}</div>
                </div>
                <div className="col-sm">
                    <label className="form-label">
                        <strong>Webiste</strong>
                    </label>
                    <div className="col-sm-12">{userData.website}</div>
                </div>
                <div className="col-sm">
                    <label className="form-label">
                        <strong>Phone</strong>
                    </label>
                    <div className="col-sm-12">{userData.phone}</div>
                </div>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
                <Link to={`/posts/${userData.id}`}>
                    <Button color='primary' size='sm'>View Post</Button>
                </Link>
                <Link to={`/albums/${userData.id}`}>
                    <Button color='primary' size='sm'>View Album</Button>
                </Link>
            </div>
        </CardBody>
    </Card>
  )
}

export default UserCard