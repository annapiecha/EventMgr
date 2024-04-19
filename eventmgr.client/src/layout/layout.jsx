import React, { useState } from 'react';
import { Container, Col, Navbar, Row, Image } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar } from './sidebar.jsx';

export function Layout() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="app">
            <Container fluid>
                <Row>
                    <Navbar expand="lg">
                        <Container fluid>
                            <Navbar.Brand>
                                <Link onClick={toggleSidebar}>
                                    <Image src="/image/menuwhite2.png" className="navigation" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link to="/">
                                    <Image src="/image/eventmgrwhite.png" className="logo" />
                                </Link>
                            </Navbar.Brand>
                            <Col style={{ padding: "0" }} />
                            <Navbar.Brand >
                                <Link to="/profile"><Image src="/image/accountwhite.png" className="navigation" /></Link>
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <Link to="/settings"><Image src="/image/settingswhite.png" className="navigation" /></Link>
                            </Navbar.Brand>
                            <Navbar.Brand >
                                <Link to="/"><Image src="/image/logoffwhite.png" className="navigation" /></Link>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </Row>
                <Row>
                    <Col md={2} className="menucolumn">
                        {showSidebar && <Sidebar />}
                    </Col>
                    <Col md={showSidebar ? 10 : 12} className={showSidebar ? "outlet-column" : ""}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

                