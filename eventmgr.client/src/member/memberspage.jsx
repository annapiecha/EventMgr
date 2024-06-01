import { Button, Container, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import member from './membersDB.json';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoTrashBinSharp, IoSettingsOutline } from "react-icons/io5";


export const Members = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [confirmation, setConfirmation] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = member.filter((info) =>
        Object.values(info).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    //Modal:
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (info) => {
        setSelectedUserInfo(info);
        setShow(true);
    };

    const [showM, setShowM] = useState(false);
    const handleCloseM = () => setShowM(false);
    const handleShowM = (info) => {
        setSelectedUserInfo(info);
        setShowM(true);
    };

    const [showA, setShowA] = useState(false);
    const handleCloseA = () => setShowA(false);
    const handleShowA = () => setShowA(true);

    const [smShow, setSmShow] = useState(false);


    const [selectedUserInfo, setSelectedUserInfo] = useState(null);

    const DisplayData = filteredData.map((info, index) => (
        <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{info["Company/Team Name"]}</td>
            <td>{info["Company Address"]}</td>
            <td>{info["Email Address"]}</td>
            <td>{info["Phone Number"]}</td>
            <td>{info["Area of Expertise"]}</td>
            <td>{info["Preferred Types of Collaboration"]}</td>
            <td>{info["Partnership Status"]}</td>
            <td>{info["Notes"]}</td>
            <td>
                <IoSettingsOutline onClick={() => handleShowM(info)} style={{ marginRight: '1rem', cursor: 'pointer' }} />
                <IoTrashBinSharp onClick={() => handleShow(info)} style={{ cursor: 'pointer' }} />
            </td>
        </tr>
    ));

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
                                <p>Are you sure you want to remove the member? This action cannot be undone!</p>
                                Member: {selectedUserInfo["Company/Team Name"]} ({selectedUserInfo["Email Address"]})
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="secondary" onClick={() => { handleClose(); setSmShow(true); setConfirmation("Member removed successfully."); }}>
                            Proceed
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showM} onHide={handleCloseM}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Manage customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {selectedUserInfo && (
                            <Col>
                                <Row>
                                    <Col>Company/Team Name: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Company/Team Name"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Company/Team Name": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Company Address: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Company Address"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Company Address": e.target.value }))} />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>Email Address: </Col>
                                    <Col>
                                        <input type="email" value={selectedUserInfo["Email Address"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Email Address": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Phone Number: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Phone Number"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Phone Number": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Area of Expertise: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Area of Expertise"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Area of Expertise": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Preferred Types of Collaboration: </Col>
                                    <Col>
                                        <Form.Control as="select" style={{ backgroundColor: '#111317' }} value={selectedUserInfo["Preferred Types of Collaboration"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Preferred Types of Collaboration": e.target.value }))}>
                                            <option value="Regular Collaboration">Regular</option>
                                            <option value="Event-based Collaboration">Event-based</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Partnership Status: </Col>
                                    <Col>
                                        <Form.Control as="select" style={{ backgroundColor: '#111317' }} value={selectedUserInfo["Partnership Status"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Partnership Status": e.target.value })) }>
                                            <option value="Active Partner">Active</option>
                                            <option value="Potential Partner">Potential</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Notes: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Notes"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Notes": e.target.value }))} />
                                    </Col>
                                </Row>                            </Col>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleCloseM}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("Member data changed successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showA} onHide={handleCloseA}>
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
                                    <Form.Control as="select" style={{ backgroundColor:'#111317'}} >
                                        <option value="">choose...</option>
                                        <option value="Regular">Regular</option>
                                        <option value="Event-based">Event-based</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Partnership Status: </Col>
                                <Col>
                                    <Form.Control as="select" style={{ backgroundColor: '#111317' }}>
                                        <option value="">choose...</option>
                                        <option value="Active">Active</option>
                                        <option value="Potential">Potential</option>
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
                        <Button variant="primary" onClick={handleCloseA}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseA(); setSmShow(true); setConfirmation("Member added successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Col style={{ flex: '1', paddingLeft: '0' }}>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ width: '100%' }} // Rozciągaj na całą dostępną szerokość
                    />
                </Col>
                <Col style={{ flex: '0 0 auto', maxWidth: '225px', paddingRight: '0' }}>
                    <Button onClick={handleShowA} style={{ width: '100%', display: 'flex', alignItems: 'center', fontWeight: '600', justifyContent: 'center' }}>
                        <FaPlus style={{ height: '13px', marginRight: '0.5rem' }} />
                        Add new member
                    </Button>
                </Col>
            </Row>
            <Row style={{ overflowX: 'auto' }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Company/Team Name</th>
                            <th>Company Address</th>
                            <th>Email address</th>
                            <th>Phone Number</th>
                            <th>Area of Expertise</th>
                            <th>Preferred Types of Collaboration</th>
                            <th>Partnership Status</th>
                            <th>Notes</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}