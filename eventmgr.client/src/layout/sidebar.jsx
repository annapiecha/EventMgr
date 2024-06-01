import React from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
export function Sidebar() {

    return (
        <SidebarMenu >
            <SidebarMenu.Body className="menu">
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/visitors">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Customers</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/events">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Events</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/tasks">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Tasks</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/notifications">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Notifications</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/items">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Warehouse</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/members">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Members</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav >
                <SidebarMenu.Nav>
                    <SidebarMenu.Nav.Link href="/vouchers">
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowRight />
                        </SidebarMenu.Nav.Icon>
                        <SidebarMenu.Nav.Title>Vouchers</SidebarMenu.Nav.Title>
                        <SidebarMenu.Nav.Icon>
                            <MdKeyboardDoubleArrowLeft />
                        </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
            </SidebarMenu.Body >
        </SidebarMenu>
    )
}