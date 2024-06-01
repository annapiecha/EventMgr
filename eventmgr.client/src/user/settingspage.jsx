import React, { useState } from 'react';
import { Button, Card, Container, Modal, Row } from 'react-bootstrap';
import './settingspage.css';

export const Settings = () => {

    const [smShow, setSmShow] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };


    const handleCardClick = () => {
        setSelectedNotification();
        setSmShow(true);
    };

    const [userData, setUserData] = useState({
        username: 'jsmith',
        password: '',
        email: 'jsmith@eventmgr.com',
        phoneNumber: '+01 234 567 8900',
        firstName: 'John',
        lastName: 'Smith',
        birthDate: '1991-01-31',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container style={{ maxWidth: '500px' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton  >
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>Are you sure you want to change data? This action cannot be undone!</p>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="secondary" onClick={() => { handleClose(); setSmShow(true); }}>
                        Proceed
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal size="xs" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body> User data changed successfully </Modal.Body>
            </Modal>
            <Card style={{ margin:'2rem', paddingRight: '2rem', paddingLeft: '2rem' } }>
                <form onSubmit={handleSubmit} >
                    <Row>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={userData.username} disabled />
                    </Row>
                    <Row>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
                    </Row>
                    <Row>
                        <label htmlFor="password">Confirm password:</label>
                        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
                    </Row>
                    <Row>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
                    </Row>
                    <Row>
                        <label htmlFor="phoneNumber">Phone number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} />
                    </Row>
                    <Row>
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleChange} />
                    </Row>
                    <Row>
                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleChange} />
                    </Row>
                    <Row>
                        <label htmlFor="birthDate">Birthday:</label>
                        <input type="date" id="birthDate" name="birthDate" value={userData.birthDate} onChange={handleChange} />
                    </Row>
                    <Button type="submit" style={{ margin: '2rem' }} onClick={handleShow}>Save changes</Button>
                </form>
            </Card>
        </Container>
    );
}