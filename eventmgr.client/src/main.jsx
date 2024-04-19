import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './layout/layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Event } from './event/eventpage.jsx';
import { Events } from './event/eventspage.jsx';
import { Item } from './item/itempage.jsx';
import { Items } from './item/itemspage.jsx';
import { Member } from './member/memberpage.jsx'
import { Members } from './member/memberspage.jsx'
import { Notification } from './notification/notificationpage.jsx'
import { Notifications } from './notification/notificationspage.jsx'
import { Report } from './report/reportpage.jsx'
import { Reports } from './report/reportspage.jsx'
import { Task } from './task/taskpage.jsx'
import { Tasks } from './task/taskspage.jsx'
import { Profile } from './user/profilepage.jsx'
import { Settings } from './user/settingspage.jsx'
import { Visitor } from './visitor/visitorpage.jsx'
import { Visitors } from './visitor/visitorspage.jsx'
import { Voucher } from './voucher/voucherpage.jsx'
import { Vouchers } from './voucher/voucherspage.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    {/*App.jsx jest podpiety do layoutu*/}
                </Route>
                <Route path='/event' element={<Layout />}><Route index element={<Event />} /></Route>
                <Route path='/events' element={<Layout />}><Route index element={<Events />} /></Route>
                <Route path='/item' element={<Layout />}><Route index element={<Item />} /></Route>
                <Route path='/items' element={<Layout />}><Route index element={<Items />} /></Route>
                <Route path='/member' element={<Layout />}><Route index element={<Member />} /></Route>
                <Route path='/members' element={<Layout />}><Route index element={<Members />} /></Route>
                <Route path='/notification' element={<Layout />}><Route index element={<Notification />} /></Route>
                <Route path='/notifications' element={<Layout />}><Route index element={<Notifications />} /></Route>
                <Route path='/report' element={<Layout />}><Route index element={<Report />} /></Route>
                <Route path='/reports' element={<Layout />}><Route index element={<Reports />} /></Route>
                <Route path='/task' element={<Layout />}><Route index element={<Task />} /></Route>
                <Route path='/tasks' element={<Layout />}><Route index element={<Tasks />} /></Route>
                <Route path='/profile' element={<Layout />}><Route index element={<Profile />} /></Route>
                <Route path='/settings' element={<Layout />}><Route index element={<Settings />} /></Route>
                <Route path='/visitor' element={<Layout />}><Route index element={<Visitor />} /></Route>
                <Route path='/visitors' element={<Layout />}><Route index element={<Visitors />} /></Route>
                <Route path='/voucher' element={<Layout />}><Route index element={<Voucher />} /></Route>
                <Route path='/vouchers' element={<Layout />}><Route index element={<Vouchers />} /></Route>
                
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);