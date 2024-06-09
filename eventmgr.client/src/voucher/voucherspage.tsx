import { Button, Container, Col, Form, Modal, Row, Table } from 'react-bootstrap';
import voucher from './vouchersDB.json';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoTrashBinSharp, IoSettingsOutline } from "react-icons/io5";

function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
}

export const Vouchers = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [confirmation, setConfirmation] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = voucher.filter((info) =>
        Object.values(info).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    //Generate Code

    const [generatedCode, setGeneratedCode] = React.useState('');

    const handleGenerateCode = () => {
        const code = generateRandomCode();
        setGeneratedCode(code);
    };


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

    const DisplayData = filteredData.map((info, index) => {
        const isExpired = new Date(info["Exp Date"]) < new Date();

        return (
            <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{info["Code"]}</td>
                <td>{info["Value"]}{info["Type"]}</td>
                <td>{info["Exp Date"]}</td>
                <td>{info["Usage Limit"]}</td>
                <td>{isExpired ? "Expired" : "Active"}</td>
                <td>
                    <IoSettingsOutline onClick={() => handleShowM(info)} style={{ marginRight: '1rem', cursor: 'pointer' }} />
                    <IoTrashBinSharp onClick={() => handleShow(info)} style={{ cursor: 'pointer' }} />
                </td>
            </tr>
        );
    });


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
                                <p>Are you sure you want to remove this voucher? This action cannot be undone!</p>
                                Voucher code: {selectedUserInfo["Code"]})
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
                        <Modal.Title>Manage voucher</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {selectedUserInfo && (
                            <Col>
                                <Row>
                                    <Col>Code: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Code"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Code": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Value: </Col>
                                    <Col>
                                        <input type="text" value={selectedUserInfo["Value"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Value": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Type: </Col>
                                    <Col>
                                        <Form.Control as="select" style={{ backgroundColor: '#111317' }} >
                                            <option value="">choose...</option>
                                            <option value="%">%</option>
                                            <option value="$">$</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Exp Date: </Col>
                                    <Col>
                                        <input type="date" value={selectedUserInfo["Exp Date"]} onChange={(e) => setSelectedUserInfo(prev => ({ ...prev, "Exp Date": e.target.value }))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>Usage Limit: </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            value={selectedUserInfo["Usage Limit"].split('/')[1]} // Wyświetl tylko część po znaku "/"
                                            onChange={(e) => {
                                                const newValue = e.target.value; // Pobierz nową wartość z pola input
                                                const previousValue = selectedUserInfo["Usage Limit"].split('/')[0]; // Pobierz wartość przed znakiem "/"
                                                setSelectedUserInfo(prev => ({ ...prev, "Usage Limit": previousValue + "/" + newValue })); // Połącz nową wartość z poprzednią przed "/" i ustaw jako nową wartość
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        )}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="primary" onClick={handleCloseM}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={() => { handleCloseM(); setSmShow(true); setConfirmation("Voucher data changed successfully."); }}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showA} onHide={handleCloseA}>
                    <Modal.Header closeButton  >
                        <Modal.Title>Add voucher</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Col>
                            <Row>
                                <Col style={{ paddingLeft: '0'} }>
                                    <Button variant="primary" style={{ paddingTop: '2px', paddingBottom: '2px' } } onClick={handleGenerateCode} >
                                        Generate code
                                    </Button>
                                </Col>
                                <Col style={{ paddingLeft: '2rem' }}>
                                    <input type="text" style={{ paddingTop: '2px', paddingBottom: '2px' }} value={generatedCode} readOnly />
                                </Col>
                            </Row>
                            <Row>
                                <Col>Value: </Col>
                                <Col>
                                    <input type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>Type: </Col>
                                <Col>
                                    <Form.Control as="select" style={{ backgroundColor: '#111317' }} >
                                        <option value="">choose...</option>
                                        <option value="%">%</option>
                                        <option value="$">$</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Exp Date: </Col>
                                <Col>
                                    <input type="date" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>Usage Limit: </Col>
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
                        <Button variant="primary" onClick={() => { handleCloseA(); setSmShow(true); setConfirmation("Voucher added successfully."); }}>
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
                        Add new voucher
                    </Button>
                </Col>
            </Row>
            <Row style={{ overflowX: 'auto' }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Value</th>
                            <th>Exp Date</th>
                            <th>Usage Limit</th>
                            <th>Status</th>
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