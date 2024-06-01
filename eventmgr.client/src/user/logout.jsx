import React, { useState } from 'react';
import { Button, Card, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './settingspage.css';

export const LogOut = () => {

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
        <Container style={{ maxWidth: '500px', paddingTop:'2rem' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to EventMgr!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>To ensure a secure and personalized experience, registration is by invitation only. Please provide your email address or phone number to request an invitation.</p>
                        <Form>
                            <Form.Group controlId="phoneNumber">
                                <Form.Control type="tel" placeholder="Enter phone number" />
                            </Form.Group>
                            <Row style={{ padding: '0.5rem' }} />
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Enter email address" />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleClose(); setSmShow(true); }}>
                        Proceed
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal size="xs" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you for submitting the request! We'll stay in touch with you within 24 hours.</Modal.Body>
            </Modal>
            <Card style={{ margin: '2rem', padding: '2rem', alignItems:'center' }}>
                <Card.Img variant="top" src="/image/eventmgrwhite.png" style={{ maxWidth: '200px', paddingBottom: '1rem' }} />
                <form onSubmit={handleSubmit} >
                    <Row>
                        <label htmlFor="username" style={{color:'white'} }>Username:</label>
                        <input type="text" id="username" name="username"  />
                    </Row>
                    <Row>
                        <label htmlFor="password" style={{ color: 'white' }}>Password:</label>
                        <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
                    </Row>
                    <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="/" style={{ textDecoration: 'none'}}>
                            <Button type="submit" style={{ maxWidth: '150px', color:'white' }} >Log in</Button>
                        </Link>
                        
                    </Row>
                    <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Button type="submit" style={{ maxWidth: '150px', color: 'white' }} onClick={handleShow}>New Customer</Button>
                    </Row>
                </form>
            </Card>
        </Container>
    );
}