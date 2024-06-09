import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { FaPlus } from "react-icons/fa";
import './eventspage.css';
import data from './eventsDB.json';

export const Events = () => {

    const localizer = momentLocalizer(moment);
    const events = data.map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end)
    }));

    const [upcomingEvents, setUpcomingEvents] = useState([]);
    useEffect(() => {
        const sortedEvents = data.map(event => {
            return {
                ...event,
                start: new Date(event.start)
            };
        }).sort((a, b) => a.start - b.start);

        const today = new Date();

        const upcomingEvents = sortedEvents.filter(event => event.start >= today).slice(0, 10);

        setUpcomingEvents(upcomingEvents);
    }, []);

    const [confirmation, setConfirmation] = useState("");

    //Modal:
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        const { start, end } = data;
        const startDate = new Date(start);
        const endDate = new Date(end);

        const startHours = startDate.getHours();
        const startMinutes = startDate.getMinutes();
        const endHours = endDate.getHours();
        const endMinutes = endDate.getMinutes();

        setSelectedUserInfo({
            ...data,
            title: data.title || '',
            start: new Date(start),
            end: new Date(end),
            startHours,
            startMinutes,
            endHours,
            endMinutes
        });
        setShow(true);
    };

    const [showM, setShowM] = useState(false);
    const handleCloseM = () => setShowM(false);
    const handleShowM = (data) => {
        const { start, end } = data;
        const startDate = new Date(start);
        const endDate = new Date(end);

        const startHours = startDate.getHours();
        const startMinutes = startDate.getMinutes();
        const endHours = endDate.getHours();
        const endMinutes = endDate.getMinutes();

        setSelectedUserInfo({
            ...data,
            title: data.title || '',
            start: new Date(start),
            end: new Date(end),
            startHours,
            startMinutes,
            endHours,
            endMinutes
        });
        setShowM(true);
    };


    const [showA, setShowA] = useState(false);
    const handleCloseA = () => setShowA(false);
    const handleShowA = () => setShowA(true);

    const [selectedDate, setSelectedDate] = useState(null); // Stan do przechowywania daty wybranego slotu

    const handleSelectSlot = (slotInfo) => {
        setSelectedDate(new Date(slotInfo.start)); // Ustawienie daty wybranego slotu
        handleShowA();
    };


    const [smShow, setSmShow] = useState(false);

    const [selectedUserInfo, setSelectedUserInfo] = useState(null);

    return (
        <Container >
            <Row style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{confirmation}</Modal.Body>
                </Modal>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedUserInfo && (
                            <div>
                                Are you sure you want to remove the event "{selectedUserInfo.title}"? This action cannot be undone!
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="secondary" onClick={() => { handleClose(); setSmShow(true); setConfirmation("Event removed successfully."); }}>
                            Proceed
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showM} onHide={handleCloseM}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Manage event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {selectedUserInfo && (
                            <Col>
                                <Row>
                                    <Col>Event title: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["title"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "title": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Start date: </Col>
                                    <Col>
                                        <input
                                            type="datetime-local"
                                            value={moment(selectedUserInfo.start).format('YYYY-MM-DDTHH:mm')}
                                            onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, start: new Date(e.target.value) }))}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>End date: </Col>
                                    <Col>
                                        <input
                                            type="datetime-local"
                                            value={moment(selectedUserInfo.end).format('YYYY-MM-DDTHH:mm')}
                                            onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, end: new Date(e.target.value) }))}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={() => { handleCloseM(); handleShow(selectedUserInfo);  }}>
                            Remove
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("Event details changed successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showA} onHide={handleCloseA}>
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
                        <Button variant="primary" onClick={handleCloseA}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseA(); setSmShow(true); setConfirmation("Event added successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
            <Row >
                <Col className="ml-auto" style={{ flex: '0 0 auto', maxWidth: '205px', paddingRight: '0' }}>
                    <Row style={{ paddingInline: '0', paddingBlock: '1rem' }}>
                        <div style={{ maxHeight: '600px', overflowY: 'auto', borderColor: '#222b37;', borderWidth: '1px', borderStyle: 'solid', paddingRight: '0', paddingLeft:'0'}}>
                            <ListGroup >
                                {upcomingEvents.map(event => (
                                    <ListGroup.Item key={event.title} className="list" >
                                        {event.start.toLocaleDateString([], { day: '2-digit', month: 'short' })} {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {event.title}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </Row>
                    <Button onClick={handleShowA} style={{ width: '100%', display: 'flex', alignItems: 'center', fontWeight: '600', justifyContent: 'center' }}>
                        <FaPlus style={{ height: '13px', marginRight: '0.5rem' }} />
                        Add new event
                    </Button>
                </Col>
                <Col>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 700 }}
                        defaultView="month"
                        views={['month', 'week', 'day']}
                        onSelectEvent={(data) => handleShowM(data)}
                        onSelectSlot={(slotInfo) => handleSelectSlot(slotInfo)}
                        selectable
                    />
                </Col>
            </Row>
        </Container>
    );
};
