import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Layout } from './layout/layout.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Events } from './event/eventspage.tsx';
import { Items } from './item/itemspage.tsx';
import { LogOut } from './user/logout.tsx';
import { Members } from './member/memberspage.tsx'
import { Notifications } from './notification/notificationspage.tsx'
import { Tasks } from './task/taskspage.tsx'
import { Settings } from './user/settingspage.tsx'
import { Visitors } from './visitor/visitorspage.tsx'
import { Vouchers } from './voucher/voucherspage.tsx'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}><Route index element={<App />} /></Route>
                <Route path='/events' element={<Layout />}><Route index element={<Events />} /></Route>
                <Route path='/items' element={<Layout />}><Route index element={<Items />} /></Route>
                <Route path='/members' element={<Layout />}><Route index element={<Members />} /></Route>
                <Route path='/logout' element={<LogOut />} />
                <Route path='/notifications' element={<Layout />}><Route index element={<Notifications />} /></Route>
                <Route path='/tasks' element={<Layout />}><Route index element={<Tasks />} /></Route>
                <Route path='/settings' element={<Layout />}><Route index element={<Settings />} /></Route>
                <Route path='/visitors' element={<Layout />}><Route index element={<Visitors />} /></Route>
                <Route path='/vouchers' element={<Layout />}><Route index element={<Vouchers />} /></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);