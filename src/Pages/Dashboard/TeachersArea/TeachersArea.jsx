import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../SideNavbar/TopNavbar';

const TeachersArea = () => {
    const routes = [
        { id: 1, path: '/dashboard/staff/allTeacher', name: ' Teacher' },
        { id: 2, path: '/dashboard/staff/allstaff', name: 'Office Staff' },
        { id: 2, path: '/dashboard/staff/allcommittee', name: 'Committee' },
        { id: 2, path: '/dashboard/staff/addnew', name: 'Add-New' },



    ];
    return (
        <div>
            <div>
                <TopNavbar routes={routes}></TopNavbar>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default TeachersArea;