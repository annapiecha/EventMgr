import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu'

export function Sidebar() {

    return (
        <SidebarMenu >
            <SidebarMenu.Body className="menu">
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/visitors">
                        <SidebarMenu.Nav.Icon>
                            
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title><img src="/image/menuitem.png" className="icon" />Customers</SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/events">
                        <SidebarMenu.Nav.Icon>
                            <img src="/image/menuitem.png" className="icon"/>
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Events</SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/items">
                        <SidebarMenu.Nav.Icon>
                            <img src="/image/menuitem.png" className="icon" />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Warehouse</SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/members">
                        <SidebarMenu.Nav.Icon>
                            <img src="/image/menuitem.png" className="icon" />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Members</SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/reports">
                        <SidebarMenu.Nav.Icon>
                            <img src="/image/menuitem.png" className="icon" />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Reports</SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/vouchers">
                        <SidebarMenu.Nav.Icon>
                            <img src="/image/menuitem.png" className="icon" />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Vouchers</SidebarMenu.Nav.Title>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
            </SidebarMenu.Body >
        </SidebarMenu>
    )
}