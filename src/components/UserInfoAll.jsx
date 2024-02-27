import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, Spinner, Button } from 'reactstrap';

const UserInfoAll = ({ isFetching, userData }) => {
  const navigate = useNavigate();

  return (
    <div className='mb-5 mt-5'>
        <Button color="secondary" onClick={() => navigate('..')}>Back</Button>
        <div className='text-center'>
            <h5>User Information</h5>
        </div>
        {isFetching ? <Spinner /> : (
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
                    <div className='row mt-3'>
                        <div className="col-sm">
                            <label className="form-label">
                                <strong>Address</strong>
                            </label>
                            <div className="col-sm-12">
                                {`${userData.address?.suite} ${userData.address?.street} ${userData.address?.city} ${userData.address?.zipcode}`}
                            </div>
                        </div>
                        <div className="col-sm">
                            <label className="form-label">
                                <strong>Company</strong>
                            </label>
                            <div className="col-sm-12">
                                {`${userData.company?.name} ${userData.company?.catchPhrase} ${userData.company?.bs}`}
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        )}
    </div>
  )
}

export default UserInfoAll;