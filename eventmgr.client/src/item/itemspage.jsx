import { Button, Container, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import item from './itemsDB.json';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoTrashBinSharp, IoSettingsOutline } from "react-icons/io5";


export const Items = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [confirmation, setConfirmation] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = item.filter((info) =>
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
            <td>{info["Product ID"]}</td>
            <td>{info["Product Name"]}</td>
            <td>{info["Stock Quantity"]}</td>
            <td>{info["Supplier"]}</td>
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
                                <p>Are you sure you want to remove the item? This action cannot be undone!</p>
                                Item: {selectedUserInfo["Product Name"]} from ({selectedUserInfo["Supplier"]})
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="secondary" onClick={() => { handleClose(); setSmShow(true); setConfirmation("Item removed successfully."); }}>
                            Proceed
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showM} onHide={handleCloseM}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Manage item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {selectedUserInfo && (
                            <Col>
                                <Row>
                                    <Col>Product ID: </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            value={selectedUserInfo["Product ID"]}
                                            onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Product ID": e.target.value }))}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Product Name: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Product Name"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Product Name": e.target.value }))} />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>Stock Quantity: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Stock Quantity"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Stock Quantity": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Supplier: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Supplier"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Supplier": e.target.value }))} />
                                    </Col>
                                </Row>
                        </Col>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleCloseM}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("Item details changed successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showA} onHide={handleCloseA}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Add new item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Col>
                            <Row>
                                <Col>Product ID: </Col>
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
                        </Col>
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleCloseA}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseA(); setSmShow(true); setConfirmation("Item added successfully."); }}>
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
                        Add new item
                    </Button>
                </Col>
            </Row>
            <Row style={{ overflowX: 'auto' }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Stock Quantity</th>
                            <th>Supplier</th>
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