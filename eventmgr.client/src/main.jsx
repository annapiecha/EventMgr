import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './layout/layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Events } from './event/eventspage.jsx';
import { Items } from './item/itemspage.jsx';
import { LogOut } from './user/logout.jsx';
import { Members } from './member/memberspage.jsx'
import { Notifications } from './notification/notificationspage.jsx'
import { Tasks } from './task/taskspage.jsx'
import { Settings } from './user/settingspage.jsx'
import { Visitors } from './visitor/visitorspage.jsx'
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