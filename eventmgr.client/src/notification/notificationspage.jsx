import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import moment from 'moment';
import { FaPlus } from "react-icons/fa";
import './notificationspage.css';
import notifications from './notificationsDB.json';

export const Notifications = () => {
    const [smShow, setSmShow] = useState(false);
    const [notificationData, setNotificationData] = useState([]);
    const [selectedNotification, setSelectedNotification] = useState(null);

    useEffect(() => {
        setNotificationData(notifications);
    }, []);

    const handleCardClick = (notification) => {
        setSelectedNotification(notification);
        setSmShow(true);
    };

    const DisplayData = () => (
        notificationData.map((notification, index) => (
            <Row key={index} className="cardRow">
                <Card style={{ width: '800px', height: '300px', position: 'relative', padding: '0', cursor: 'pointer' }} onClick={() => handleCardClick(notification)}>
                    <Card.Body style={{ overflow: 'hidden', padding: 0 }}>
                        <Card.Img src={notification.img_src} style={{ height: '100%', objectFit: 'cover', opacity: 0.1 }} />
                        <Card.ImgOverlay style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Card.Title style={{ color: 'white' }}>{notification.title}</Card.Title>
                            <Card.Text style={{ color: 'white', textAlign: 'center' }}>
                                {notification.description}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card.Body>
                </Card>
            </Row>
        ))
    );

    return (
        <Container>
            <Modal size="md" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">{selectedNotification && selectedNotification.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedNotification && selectedNotification.full_description}
                </Modal.Body>
            </Modal>
            <DisplayData />
        </Container>
    )
}
