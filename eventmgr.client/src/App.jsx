import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function App() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className="container">
            <Row style={{paddingTop:'2rem', paddingBottom:'1rem'} }>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src="/image/ExampleTall.jpg" alt="First slide" className="carousel-img" />
                        <Carousel.Caption>
                                <h3>News #1</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src="/image/ExampleCarouselImage.jpg" alt="First slide" className="carousel-img"  />
                        <Carousel.Caption>
                                <h3>News #2</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/notifications" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src="/image/ExampleCarouselImage.jpg" alt="First slide" className="carousel-img"  />
                        <Carousel.Caption>
                                <h3>News #3</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col>
                    <Link to="/member" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card>
                            <Card.Text>
                                <Card.Title>Add member</Card.Title>
                            </Card.Text>
                        </Card>
                    </Link>
                </Col>
                <Col><Link to="/visitor" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card>
                            <Card.Text>
                                <Card.Title>Add visitor</Card.Title>
                            </Card.Text>
                        </Card>
                </Link></Col>
                <Col><Link to="/event" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card>
                        <Card.Text>
                            <Card.Title>Add event</Card.Title>
                        </Card.Text>
                    </Card>
                </Link></Col>
            </Row>
            <Row>
                <Col>
                    <Card className="card-incoming">
                        <Card.Text className="cardtext-incoming">
                            <Card.Title>Incoming events</Card.Title>
                        </Card.Text>
                        <div className="div-incoming">
                            <ListGroup>
                                <ListGroup.Item className="list">Event #1</ListGroup.Item>
                                <ListGroup.Item className="list">Event #2</ListGroup.Item>
                                <ListGroup.Item className="list">Event #3</ListGroup.Item>
                                <ListGroup.Item className="list">Event #4</ListGroup.Item>
                                <ListGroup.Item className="list">Event #5</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="card-incoming">
                        <Card.Text className="cardtext-incoming">
                            <Card.Title>Incoming tasks</Card.Title>
                        </Card.Text>
                        <div className="div-incoming">
                            <ListGroup >
                                <ListGroup.Item className="list">Task #1</ListGroup.Item>
                                <ListGroup.Item className="list">Task #2</ListGroup.Item>
                                <ListGroup.Item className="list">Task #3</ListGroup.Item>
                                <ListGroup.Item className="list">Task #4</ListGroup.Item>
                                <ListGroup.Item className="list">Task #5</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

