import './App.css';
import { Button, Container, Col, Card, Carousel, Form, ListGroup, Modal, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import eventsData from './event/eventsDB.json';
import taskData from './task/tasksDB.json';
import { Link } from 'react-router-dom';
import moment from 'moment';
import notifications from './notification/notificationsDB.json';
function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [showA, setShowA] = useState(false);
    const handleCloseA = () => setShowA(false);
    const handleShowA = () => setShowA(true);

    const [showM, setShowM] = useState(false);
    const handleCloseM = () => setShowM(false);
    const handleShowM = () => setShowM(true);

    const [showE, setShowE] = useState(false);
    const handleCloseE = () => setShowE(false);
    const handleShowE = () => setShowE(true);

    const [confirmation, setConfirmation] = useState("");
    const [smShow, setSmShow] = useState(false);

    const firstThreeNotifications = notifications.slice(0, 3);

    const carouselNotifications = () => (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {firstThreeNotifications.map((notification, idx) => (
                <Carousel.Item key={idx}>
                    <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src={notification.img_src} alt="Slide" className="carousel-img" />
                        <Carousel.Caption>
                            <h3>{notification.title}</h3>
                            <p>{notification.description}</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    );

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    useEffect(() => {
        const sortedEvents = eventsData.map(event => {
            return {
                ...event,
                start: new Date(event.start)
            };
        }).sort((a, b) => a.start - b.start);

        const today = new Date();

        const upcomingEvents = sortedEvents.filter(event => event.start >= today).slice(0, 5);

        setUpcomingEvents(upcomingEvents);
    }, []);

    const [upcomingTasks, setUpcomingTasks] = useState([]);
    useEffect(() => {
        const sortedTasks = taskData
            .filter(task => !task.completed) // Filter out completed tasks
            .map(task => {
                return {
                    ...task,
                    date: new Date(task.date)
                };
            })
            .sort((a, b) => a.date - b.date);

        const today = new Date();

        const upcomingTasks = sortedTasks.filter(task => task.date >= today).slice(0, 5);

        setUpcomingTasks(upcomingTasks);
    }, []);


    const [selectedDate] = useState(new Date()); // Define selectedDate state
    
    const confirmationModal = () => (
        <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>{confirmation}</Modal.Body>
        </Modal>
    )

    const newCustomer = () => (
        <Modal show={showA} onHide={handleCloseA}>
            <Modal.Header closeButton>
                <Modal.Title>Add new customer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col>
                    <Row>
                        <Col>First Name: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Last Name: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Email: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Phone Number: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Birthday: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                </Col>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseA}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => { handleCloseA(); setSmShow(true); setConfirmation("User added successfully."); }}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const newEvent = () => (
        <Modal show={showE} onHide={handleCloseE}>
            <Modal.Header closeButton  >
                <Modal.Title>Add new event</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Col>
                    <Row>
                        <Col>Event title: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Start date: </Col>
                        <Col>
                            <input type="datetime-local" value={selectedDate ? moment(selectedDate).format('YYYY-MM-DDTHH:mm') : ''} onChange={() => { }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>End date: </Col>
                        <Col>
                            <input type="datetime-local" value={selectedDate ? moment(selectedDate).format('YYYY-MM-DDTHH:mm') : ''} onChange={() => { }} />
                        </Col>
                    </Row>
                </Col>
            </Modal.Body>
            <Modal.Footer >
                <Button variant="primary" onClick={handleCloseE}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => { handleCloseE(); setSmShow(true); setConfirmation("Event added successfully."); }}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    )

    const newMember = () => (
        <Modal show={showM} onHide={handleCloseM}>
            <Modal.Header closeButton  >
                <Modal.Title>Add new member</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Col>
                    <Row>
                        <Col>Company/Team Name: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Company Address: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Email Address: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Phone Number: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Area of Expertise: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>Preferred Types of Collaboration: </Col>
                        <Col>
                            <Form.Control as="select" style={{ backgroundColor: '#111317' }} >
                                <option value="">choose...</option>
                                <option value="Regular Collaboration">Regular</option>
                                <option value="Event-based Collaboration">Event-based</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Partnership Status: </Col>
                        <Col>
                            <Form.Control as="select" style={{ backgroundColor: '#111317' }}>
                                <option value="">choose...</option>
                                <option value="Active Partner">Active</option>
                                <option value="Potential Partner">Potential</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Notes: </Col>
                        <Col>
                            <input type="text" />
                        </Col>
                    </Row>
                </Col>
            </Modal.Body>
            <Modal.Footer >
                <Button variant="primary" onClick={handleCloseM}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("Member added successfully."); }}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>

    );

    return (
        <Container fluid className="container">
            {confirmationModal()}
            {newCustomer()}
            {newMember()}
            {newEvent()}
            <Row style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
                {carouselNotifications()}
            </Row>
            <Row>
                <Col>
                    <Card onClick={handleShowM} style={{cursor: 'pointer' }}>
                        <Card.Text>
                            <Card.Title>Add member</Card.Title>
                        </Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={handleShowA} style={{ cursor: 'pointer' }}>
                            <Card.Text>
                                <Card.Title>Add customer</Card.Title>
                            </Card.Text>
                        </Card>
                </Col>
                <Col>
                    <Card onClick={handleShowE} style={{ cursor: 'pointer' }}>
                        <Card.Text>
                            <Card.Title>Add event</Card.Title>
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="card-incoming" >
                        <Card.Text className="cardtext-incoming">
                            <Card.Title>Upcoming events</Card.Title>
                        </Card.Text>
                        <div className="div-incoming"  >
                            <Link to="/events">
                                <ListGroup >
                                    {upcomingEvents.map(event => (
                                        <ListGroup.Item key={event.title} className="list" >
                                            {event.start.toLocaleDateString([], { day: '2-digit', month: 'short' })} {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {event.title}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Link>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-incoming">
                        <Card.Text className="cardtext-incoming">
                            <Card.Title>Upcoming tasks</Card.Title>
                        </Card.Text>
                        <Link to="/tasks">
                            <div className="div-incoming">
                                <ListGroup >
                                    {upcomingTasks.map(task => (
                                        <ListGroup.Item key={task.task} className="list" >
                                            {task.date.toLocaleDateString([], { day: '2-digit', month: 'short' })} {task.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {task.task}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

