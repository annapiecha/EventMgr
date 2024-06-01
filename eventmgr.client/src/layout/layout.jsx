import React, { useState } from 'react';
import { Container, Col, Navbar, Row, Image } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar } from './sidebar.jsx';
import { IoSettingsOutline, IoLogOutOutline, IoMenuOutline } from "react-icons/io5";


export function Layout() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="app">
            <Container fluid>
                <Row className="navbar">
                    <Navbar expand="lg">
                        <Container fluid>
                            <Navbar.Brand>
                                <Link onClick={toggleSidebar}>
                                    <IoMenuOutline className="navigation" style={{ height: '50px', transform: 'scale(0.7, 1)' }} />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to="/">
                                    <Image src="/image/eventmgrwhite.png" className="logo"  />
                                </Link>
                            </Navbar.Brand>
                            <Col style={{ padding: "0" }} />
                            <Navbar.Brand >
                                <Link to="/settings"><IoSettingsOutline className="navigation" style={{ height: '30px' }} /></Link>
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <Link to="/logout"><IoLogOutOutline className="navigation" style={{height:'35px'}} /></Link>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </Row>
                <Row >
                    <Col md={2} className="menucolumn">
                        {showSidebar && <Sidebar />}
                    </Col>
                    <Col md={showSidebar ? 10 : 12} className={showSidebar ? "outlet-shownSidebar" : "outlet-hiddenSidebar"}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

                