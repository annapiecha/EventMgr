import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Modal, Row, Tab, Tabs, Form } from 'react-bootstrap';
import { IoTrashBinSharp, IoSettingsOutline } from "react-icons/io5";
import moment from "moment";
import tasksData from './tasksDB.json'; // Correctly import tasks data
import './taskspage.css';

export const Tasks = () => {
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [confirmation, setConfirmation] = useState("");
    const [show, setShow] = useState(false);
    const [showM, setShowM] = useState(false);
    const [smShow, setSmShow] = useState(false);
    const [selectedUserInfo, setSelectedUserInfo] = useState(null);

    useEffect(() => {
        setTasks(tasksData); // Initialize tasks with imported data
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (info) => {
        setSelectedUserInfo(info);
        setShow(true);
    };

    const handleCloseM = () => setShowM(false);
    const handleShowM = (info) => {
        setSelectedUserInfo(info);
        setShowM(true);
    };

    const DisplayData = (filterType) => {
        let filteredTasks = tasks;
        if (filterType === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filterType === 'active') {
            filteredTasks = tasks.filter(task => !task.completed);
        }

        return filteredTasks.map((task, index) => (
            <Row key={index + 1} className="align-items-center justify-content-center" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                <Col md="1" style={{ marginLeft: '0.5rem' }}><Form.Check type="checkbox" checked={task.completed} /></Col>
                <Col md="2">{moment(task.date).format('DD MMM HH:mm')}</Col>
                <Col style={{ flex: '1', minWidth: '230px' }} >{task.task}</Col>
                <Col md="1" style={{ marginRight: '0.5rem' }}>
                    <IoSettingsOutline onClick={() => handleShowM(task)} style={{ marginRight: '1rem', cursor: 'pointer' }} />
                    <IoTrashBinSharp onClick={() => handleShow(task)} style={{ cursor: 'pointer' }} />
                </Col>
            </Row>
        ));
    };

    return (
        <Container style={{ maxWidth: '1000px', padding: '1rem' }}>
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
                    Are you sure you want to remove this task?
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="secondary" onClick={() => { handleClose(); setSmShow(true); setConfirmation("Task removed successfully."); }}>
                        Proceed
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showM} onHide={handleCloseM}>
                <Modal.Header closeButton  >
                    <Modal.Title>Manage task</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {selectedUserInfo && (
                        <Row className="align-items-center justify-content-center" >
                            <Col style={{ flex: '1' }}>
                                <input
                                    type="text"
                                    value={selectedUserInfo["task"]}
                                    onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "task": e.target.value }))}
                                    style={{ minWidth:'100px', width: '100%' }}
                                />
                            </Col>
                            <Col xs="auto" >
                                <input
                                    type="datetime-local"
                                    value={moment(selectedUserInfo.date).format('YYYY-MM-DDTHH:mm')}
                                    onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, date: new Date(e.target.value) }))}
                                />
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="primary" onClick={() => { handleCloseM();}}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("Task details changed successfully."); }}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card>
                <Row className="align-items-center" style={{ padding: '1rem', paddingBottom: '2rem' }}>
                    <Col style={{ flex: '1' }}>
                        <input
                            type="text"
                            style={{ width: '100%', padding: '0.5rem' }}
                            placeholder="Enter a new task"
                        />
                    </Col>
                    <Col xs="auto">
                        <input
                            type="datetime-local"
                            style={{ padding: '0.5rem' }}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" style={{ width: '100%', margin: '0.2rem' }}>
                            Add
                        </Button>
                    </Col>
                </Row>
                <Tabs defaultActiveKey="active" id="noanim-tab-example" className="mb-3" >
                    <Tab eventKey="all" title="All">
                        {DisplayData('all')}
                    </Tab>
                    <Tab eventKey="active" title="Active">
                        {DisplayData('active')}
                    </Tab>
                    <Tab eventKey="completed" title="Completed">
                        {DisplayData('completed')}
                    </Tab>
                </Tabs>
            </Card>
        </Container>
    );
};
