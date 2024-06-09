import { Container, Col, Navbar, Row, Image } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { Sidebar } from './sidebar.tsx';
import { IoSettingsOutline, IoLogOutOutline, IoMenuOutline } from "react-icons/io5";

export function Layout() {

    const toggleSidebar = () => {
        const isS = document.querySelector('.sidebar-colS');
        if (isS) {
            isS.classList.remove('sidebar-colS');
            isS.classList.add('sidebar-colH');
        }
        else {
            const isH = document.querySelector('.sidebar-colH');
            if (isH) {
                isH.classList.remove('sidebar-colH');
                isH.classList.add('sidebar-colS');
            }
        }
    };

    const closeSidebar = () => {
        const isS = document.querySelector('.sidebar-colH');
        if (isS) {
            isS.classList.remove('sidebar-colH');
            isS.classList.add('sidebar-colS');
        }
    };

    

    return (
        <Container fluid>
            <Row>
                <Navbar className="navbar">
                    <Container fluid>
                        <Navbar.Brand>
                            <IoMenuOutline
                                className="navbar-icons"
                                style={{ height: '50px', transform: 'scale(0.7, 1)', cursor: 'pointer' }}
                                onClick={toggleSidebar}
                            />
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Link to="/">
                                <Image
                                    src="/image/eventmgrwhite.png"
                                    style={{ width: '100%', height: '45px', userSelect: 'none' }}
                                    onClick={closeSidebar}
                                />
                            </Link>
                        </Navbar.Brand>
                        <Col
                            style={{ padding: "0" }}
                            onClick={closeSidebar}
                        />
                        <Navbar.Brand >
                            <Link to="/settings">
                                <IoSettingsOutline
                                    className="navbar-icons"
                                    style={{ height: '30px' }}
                                    onClick={closeSidebar}
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand >
                            <Link to="/logout">
                                <IoLogOutOutline
                                    className="navbar-icons"
                                    style={{ height: '38px' }}
                                    onClick={closeSidebar}
                                />
                            </Link>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
            <Row style={{ marginTop: '60px' } } >               
                <Col className="sidebar-colS">
                    <Sidebar />
                </Col>
                <div onClick={closeSidebar}>
                    <Outlet />
                </div>
                
            </Row>
        </Container>
    )
}