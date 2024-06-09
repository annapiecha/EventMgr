import { Button, Container, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import visitor from './visitorsDB.json';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoTrashBinSharp, IoSettingsOutline } from "react-icons/io5";


export const Visitors = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [confirmation, setConfirmation] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = visitor.filter((info) =>
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
        <tr key={info.id}>
            <td>{index + 1}</td>
            <td>{info.firstName}</td>
            <td>{info.lastName}</td>
            <td>{info.email}</td>
            <td>{info.joinDate}</td>
            <td>{info.phoneNumber}</td>
            <td>{info.birthday}</td>
            <td>{info.lastPurchaseDate}</td>
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
                                <p>Are you sure you want to remove the user? This action cannot be undone!</p>
                                User: {selectedUserInfo.firstName} {selectedUserInfo.lastName} ({selectedUserInfo.email})
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="secondary" onClick={() => { handleClose(); setSmShow(true); setConfirmation("User removed successfully."); }}>
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
                                    <Col>First Name: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo.firstName} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, firstName: e.target.value }))} />
                                    </Col>                                    
                                </Row>
                                <Row>
                                    <Col>Last Name: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo.lastName} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, lastName: e.target.value }))} />
                                    </Col>  
                                    
                                </Row>
                                <Row>
                                    <Col>Email: </Col>
                                    <Col>
                                        <input type="email" value={selectedUserInfo.email} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, email: e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Phone Number: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo.phoneNumber} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, phoneNumber: e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Birthday: </Col>
                                    <Col>
                                        <input type="date" value={selectedUserInfo.birthday} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, birthday: e.target.value }))} />
                                    </Col>
                                </Row>
                            </Col>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleCloseM}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("User data changed successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showA} onHide={handleCloseA}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Add new customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
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
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleCloseA}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseA(); setSmShow(true); setConfirmation("User added successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Col style={{ flex: '1', paddingLeft:'0' }}>
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
                        Add new customer
                    </Button>
                </Col>
            </Row>
            <Row style={{ overflowX: 'auto' } }>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email address</th>
                            <th>Join date</th>
                            <th>Phone number</th>
                            <th>Birthday</th>
                            <th>Last purchase date</th>
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